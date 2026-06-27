import { useEffect } from "react";

import { useFetcher } from "react-router";

import { toast } from "sonner";

import type { cartActions } from "../cart.actions";
import { CART_INTENTS } from "../cart.constants";

export const useCartItem = () => {
  const fetcher = useFetcher<typeof cartActions>();

  const isUpdateAction =
    fetcher.formData?.get("intent") === CART_INTENTS.UPDATE_QUANTITY;
  const isDeleteAction =
    fetcher.formData?.get("intent") === CART_INTENTS.DELETE_FROM_CART;

  const isDeletingFromCart = isDeleteAction && fetcher.state !== "idle";
  const isUpdatingQuantity = isUpdateAction && fetcher.state !== "idle";

  useEffect(() => {
    if (fetcher.state !== "loading" || !fetcher.data) return;

    const intent = fetcher.formData?.get("intent");
    const { success, errorMessage } = fetcher.data;

    switch (intent) {
      case CART_INTENTS.DELETE_FROM_CART: {
        if (success) {
          toast.success("Product removed from cart successfully");
        }

        if (errorMessage) {
          toast.error(errorMessage || "Failed to remove the product from cart");
        }

        return;
      }

      case CART_INTENTS.UPDATE_QUANTITY: {
        if (success) {
          toast.success("Successfully updated quantity");
        }

        if (errorMessage) {
          toast.error(errorMessage || "Failed to update the product quantity");
        }

        return;
      }
    }
  }, [fetcher.state, fetcher.data]);

  return {
    fetcher,
    isDeletingFromCart,
    isUpdatingQuantity,
  };
};
