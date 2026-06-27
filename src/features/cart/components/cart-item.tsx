import { Activity } from "react";

import { Add01Icon, Remove01Icon } from "@hugeicons/core-free-icons";

import { Card, CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";

import { cn } from "@/lib/utils";

import type { CartItemType } from "../cart.types";
import { useCartItem } from "../hooks/use-cart-item";

import {
  CartItemActions,
  CartItemImage,
  CartItemName,
  CartItemOverlay,
  CartItemPrice,
  CartQuantityButton,
} from "./";

interface ICartItemProps extends CartItemType {}

const CartItem = ({
  cartId,
  image_url,
  name,
  price,
  quantity,
  specifications,
}: ICartItemProps) => {
  const { fetcher, isDeletingFromCart, isUpdatingQuantity } = useCartItem();

  return (
    <Card
      className={cn(
        "relative",
        "flex flex-row gap-0",
        "w-full",
        "p-4",
        "xs:flex-col xs:gap-y-4",
      )}
    >
      <Activity mode={isDeletingFromCart ? "visible" : "hidden"}>
        <CartItemOverlay />
      </Activity>

      <CartItemImage image_url={image_url} alt={name} />
      <CardContent
        className={cn(
          "flex justify-between items-center",
          "w-full",
          "xs:flex-col xs:pr-0 xs:pl-0 xs:gap-y-4",
        )}
      >
        <CartItemName name={name} specifications={specifications} />
        <div
          className={cn(
            "flex items-center justify-between",
            "w-full",
            "xs:flex-col xs:gap-y-2",
            "md:flex-row",
          )}
        >
          <div className="flex items-center gap-1.5">
            <CartQuantityButton
              fetcher={fetcher}
              cartId={cartId}
              icon={Remove01Icon}
              quantity={quantity - 1}
              disabled={isUpdatingQuantity}
            />
            <div
              className={cn(
                "flex items-center justify-center",
                "size-10 rounded-lg",
                "border border-foreground/20 bg-accent/30",
                "text-center",
              )}
            >
              {isUpdatingQuantity ? <Spinner /> : <span>{quantity}</span>}
            </div>
            <CartQuantityButton
              fetcher={fetcher}
              cartId={cartId}
              icon={Add01Icon}
              quantity={quantity + 1}
              disabled={isUpdatingQuantity}
            />
          </div>
          <div className="flex items-center gap-6">
            <CartItemPrice price={price} />
            <div className="absolute top-4 right-2">
              <CartItemActions cartId={cartId} fetcher={fetcher} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItem;
