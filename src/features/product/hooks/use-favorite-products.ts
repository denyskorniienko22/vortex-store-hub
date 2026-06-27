import { useEffect } from "react";

import { useLoaderData } from "react-router";

import { toast } from "sonner";

import type { favoriteProductsLoader } from "../product.loader";

export const useFavoriteProducts = () => {
  const { products: favoriteProducts, errorMessage } =
    useLoaderData<typeof favoriteProductsLoader>();

  useEffect(() => {
    if (errorMessage) toast.error(errorMessage);
  }, [errorMessage]);

  const isFavoritesProductsEmpty = favoriteProducts?.length === 0;

  return {
    favoriteProducts,
    isFavoritesProductsEmpty,
  };
};
