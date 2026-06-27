import { redirect } from "react-router";

import { DATABASE_TABLES } from "@/constants/database-tables";
import { supabase } from "@/lib/supabase";
import { routes } from "@/root/routes";

import type { OrderItemLoaderResultType, OrderType } from "./order.types";

export const orderLoader = async (): Promise<
  OrderItemLoaderResultType | Response
> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return redirect(routes.CATALOG);

  const { data, error } = await supabase
    .from(DATABASE_TABLES.ORDERS)
    .select(
      `
      *,
      order_products (
        id,
        quantity,
        price_at_purchase,
        product:product_id (
          id,
          name,
          price,
          image_url,
          specifications,
          brand
        )
      )
    `,
    )
    .eq("user_id", user?.id);

  if (error) {
    return {
      orders: undefined,
      errorMessage: "Failed to load your orders",
    };
  }

  const orders = (data as unknown as OrderType[]) ?? [];

  return { orders };
};
