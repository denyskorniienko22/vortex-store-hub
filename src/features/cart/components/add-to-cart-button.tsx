import { useRouteLoaderData } from "react-router";

import { ShoppingBasket01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { PRODUCT_INTENTS } from "@/features/product/product.constants";
import { cn } from "@/lib/utils";

import { Button } from "../../../components/ui/button";
import { Spinner } from "../../../components/ui/spinner";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../components/ui/tooltip";
import { useAddToCart } from "../hooks/use-add-to-cart";

interface IAddToCartButtonProps {
  productId: string;
}

const AddToCartButton = ({ productId }: IAddToCartButtonProps) => {
  const user = useRouteLoaderData("root");
  const isUserLoggedIn = user && true;

  const { fetcher, isAddingToCart } = useAddToCart();

  if (isUserLoggedIn) {
    return (
      <fetcher.Form method="post" className="w-full">
        <input type="hidden" name="product_id" value={productId} />
        <input type="hidden" name="intent" value={PRODUCT_INTENTS.ADD_TO_CART} />
        <Button
          type="submit"
          disabled={isAddingToCart}
          className={cn(
            "w-full h-11",
            "gap-2",
            "shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]",
            "text-sm font-bold",
            "transition-all",
            "cursor-pointer",
            "hover:shadow-primary/20",
          )}
        >
          {isAddingToCart ? (
            <Spinner />
          ) : (
            <>
              <HugeiconsIcon icon={ShoppingBasket01Icon} size={18} />
              <span>In Cart</span>
            </>
          )}
        </Button>
      </fetcher.Form>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger className="w-full h-11" asChild>
        <span>
          <Button
            disabled={!isUserLoggedIn}
            className={cn(
              "gap-2",
              "size-full",
              "shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]",
              "text-sm font-bold",
              "transition-all",
              "cursor-pointer",
              "hover:shadow-primary/20",
            )}
          >
            <HugeiconsIcon icon={ShoppingBasket01Icon} size={18} />
            In Cart
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent className="text-sm font-semibold">
        <p>Sign in to your acccout</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default AddToCartButton;
