import { type FetcherWithComponents } from "react-router";

import { Delete04Icon, MoreVerticalIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import type { ActionResponseType } from "@/types/ActionResponse";

import { CART_INTENTS } from "../../cart.constants";

interface ICartItemActionsProps {
  fetcher: FetcherWithComponents<ActionResponseType>;
  cartId: string;
}

const CartItemActions = ({ fetcher, cartId }: ICartItemActionsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className={cn(
            "flex items-center justify-center",
            "size-10",
            "cursor-pointer",
          )}
        >
          <HugeiconsIcon icon={MoreVerticalIcon} className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="py-2">
        <fetcher.Form method="post">
          <input
            type="hidden"
            name="intent"
            value={CART_INTENTS.DELETE_FROM_CART}
          />
          <input type="hidden" name="cart_id" value={cartId} />
          <button className="w-full" type="submit">
            <DropdownMenuItem variant="destructive">
              <HugeiconsIcon icon={Delete04Icon} />
              Remove
            </DropdownMenuItem>
          </button>
        </fetcher.Form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CartItemActions;
