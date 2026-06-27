import { type FetcherWithComponents } from "react-router";

import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { routes } from "@/root/routes";
import type { ActionResponseType } from "@/types/ActionResponse";

import { CART_INTENTS } from "../../cart.constants";

interface ICartQuantityButtonProps {
  fetcher: FetcherWithComponents<ActionResponseType>;
  cartId: string;
  quantity: number;
  icon: IconSvgElement;
  disabled: boolean;
}

const CartQuantityButton = ({
  fetcher,
  cartId,
  quantity,
  icon,
  disabled,
}: ICartQuantityButtonProps) => {
  return (
    <fetcher.Form method="post" action={routes.CART}>
      <input type="hidden" name="intent" value={CART_INTENTS.UPDATE_QUANTITY} />
      <input type="hidden" name="quantity" value={quantity.toString()} />
      <input type="hidden" name="cart_id" value={cartId} />
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        disabled={disabled}
        className={cn(
          "flex items-center justify-center",
          "size-max rounded-2xl",
          "p-2",
          "cursor-pointer",
        )}
      >
        <HugeiconsIcon icon={icon} className="size-8" />
      </Button>
    </fetcher.Form>
  );
};

export default CartQuantityButton;
