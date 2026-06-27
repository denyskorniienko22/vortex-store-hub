import { redirect } from "react-router";

import { routes } from "@/root/routes";

import { cartLoader } from "../cart/cart.loader";
import type { CartItemLoaderResultType } from "../cart/cart.types";

export const checkoutLoader = async (): Promise<
  Response | CartItemLoaderResultType
> => {
  const data = await cartLoader();

  if (data instanceof Response) return data;
  if (data.cartItems?.length === 0) return redirect(routes.CATALOG);

  if (data.errorMessage) {
    return {
      cartItems: undefined,
      totalAmount: 0,
      errorMessage: "Failed to fetch items for order.",
    };
  }

  return data;
};
