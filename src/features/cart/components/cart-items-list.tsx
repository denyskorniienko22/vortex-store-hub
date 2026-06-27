import List from "@/components/ui/list";
import { cn } from "@/lib/utils";

import type { CartItemType } from "../cart.types";

import CartItem from "./cart-item";

interface ICartItemsListProps {
  cartItems: CartItemType[];
}

const CartItemsList = ({ cartItems }: ICartItemsListProps) => {
  return (
    <List
      items={cartItems}
      renderItem={(cartItem) => <CartItem {...cartItem} />}
      className={cn(
        "grid grid-cols-4 gap-4",
        "xs:grid-cols-1",
        "xsm:grid-cols-2",
        "lg:grid-cols-3",
        "xl:grid-cols-4",
      )}
    />
  );
};

export default CartItemsList;
