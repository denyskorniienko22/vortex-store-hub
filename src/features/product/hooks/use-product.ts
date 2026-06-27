import { useEffect } from "react";

import { useLoaderData } from "react-router";

import { toast } from "sonner";

import type { productItemLoader } from "../product.loader";

export const useProduct = () => {
  const { product, errorMessage } = useLoaderData<typeof productItemLoader>();

  useEffect(() => {
    if (errorMessage) toast.error(errorMessage);
  }, [errorMessage]);

  return {
    product,
  };
};
