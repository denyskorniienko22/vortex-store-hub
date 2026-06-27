import { useLoaderData } from "react-router";

import type { cartLoader } from "../cart.loader";

export const useCart = () => {
  const { cartItems } = useLoaderData<typeof cartLoader>();

  const isCartEmpty = !cartItems || cartItems.length === 0;

  return {
    cartItems,
    isCartEmpty,
  };
};
