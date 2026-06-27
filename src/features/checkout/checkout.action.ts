import { type ActionFunctionArgs, redirect } from "react-router";

import { DATABASE_TABLES } from "@/constants/database-tables";
import { supabase } from "@/lib/supabase";
import { routes } from "@/root/routes";
import type { ActionResponseType } from "@/types/ActionResponse";

export const checkoutAction = async ({
  request,
}: ActionFunctionArgs): Promise<ActionResponseType | Response> => {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const surname = formData.get("surname") as string;
  const phone = formData.get("phone") as string;
  const way_to_deliver = formData.get("way_to_deliver") as string;
  const way_to_payment = formData.get("way_to_payment") as string;

  const cartDataRaw = formData.get("cart_items") as string;
  const totalAmount = Number(formData.get("total_amount"));

  const cartItems = JSON.parse(cartDataRaw);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: order, error: orderError } = await supabase
    .from(DATABASE_TABLES.ORDERS)
    .insert({
      name,
      surname,
      phone,
      way_to_deliver,
      way_to_payment,
      user_id: user?.id,
      total_amount: totalAmount,
    })
    .select("id")
    .single();

  if (orderError) {
    return {
      success: false,
      errorMessage: "Failed to create order",
    };
  }

  const orderItems = cartItems.map((item: any) => ({
    order_id: order?.id,
    product_id: item.id,
    quantity: item.quantity,
    price_at_purchase: item.price,
  }));

  const { error: itemsError } = await supabase
    .from(DATABASE_TABLES.ORDER_PRODUCTS)
    .insert(orderItems);

  if (itemsError) {
    await supabase.from(DATABASE_TABLES.ORDERS).delete().eq("id", order.id);
    return { success: false, errorMessage: "Failed to add products" };
  }

  const { error: cleanCartError } = await supabase
    .from(DATABASE_TABLES.CART)
    .delete()
    .eq("user_id", user?.id);

  if (cleanCartError) {
    return {
      success: false,
      errorMessage: "An error occurred while emptying the Cart",
    };
  }

  return redirect(routes.USER_ORDERS);
};
