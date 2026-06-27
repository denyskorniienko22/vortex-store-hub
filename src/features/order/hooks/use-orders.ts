import { useEffect } from "react";

import { useLoaderData } from "react-router";

import { toast } from "sonner";

import type { orderLoader } from "../order.loader";

export const useOrders = () => {
  const { orders, errorMessage } = useLoaderData<typeof orderLoader>();

  useEffect(() => {
    if (errorMessage) toast.error(errorMessage);
  }, [errorMessage]);

  const isUserOrdersEmpty = orders?.length === 0;

  return {
    orders,
    isUserOrdersEmpty,
  };
};
