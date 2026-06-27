import { useEffect } from "react";

import { useFetcher, useLoaderData } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import type { checkoutAction } from "../checkout.action";
import type { checkoutLoader } from "../checkout.loader";
import { type CheckoutFormValues, checkoutSchema } from "../checkout.schema";

export const useCheckout = () => {
  const { cartItems, totalAmount, errorMessage } =
    useLoaderData<typeof checkoutLoader>();

  const fetcher = useFetcher<typeof checkoutAction>();

  const form = useForm<CheckoutFormValues>({
    mode: "all",
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      way_to_deliver: "warp-drive-delivery",
      way_to_payment: "secure-card",
    },
  });

  useEffect(() => {
    if (errorMessage) toast.error(errorMessage);
  }, [errorMessage]);

  const handleCreateOrder = (data: CheckoutFormValues) => {
    const payload = {
      ...data,
      cart_items: JSON.stringify(
        cartItems?.map((cartItem) => ({
          id: cartItem.productId,
          quantity: cartItem.quantity,
          price: cartItem.price,
        })),
      ),
      total_amount: totalAmount.toString(),
      intent: "creating-order",
    };

    fetcher.submit(payload, { method: "post" });
  };

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      if (fetcher.data.success) {
        toast.success("Created an order successfully!");
      } else if (fetcher.data.errorMessage) {
        toast.error(fetcher.data.errorMessage);
      }
    }
  }, [fetcher.state, fetcher.data]);

  const isCreatingOrder =
    fetcher.formData?.get("intent") === "creating-order" &&
    fetcher.state !== "idle";

  return {
    ...form,
    cartItems,
    totalAmount,
    isCreatingOrder,
    onSubmit: form.handleSubmit(handleCreateOrder),
  };
};
