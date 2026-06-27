import { useEffect } from "react";

import { useLoaderData, useNavigation } from "react-router";

import { toast } from "sonner";

import type { productLoader } from "../product.loader";

export const useCatalog = () => {
  const data = useLoaderData<typeof productLoader>();

  const navigation = useNavigation();

  const isSearching = navigation.state === "loading";
  const isCatalogEmpty = data?.products?.length === 0;

  useEffect(() => {
    if (data?.errorMessage) toast.error(data.errorMessage);
  }, [data]);

  return {
    products: data?.products,
    isSearching,
    isCatalogEmpty,
  };
};
