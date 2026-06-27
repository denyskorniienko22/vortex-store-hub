import List from "@/components/ui/list";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { CartItemType } from "@/features/cart/cart.types";
import { cn } from "@/lib/utils";

import CheckoutProductItem from "./checkout-product-item";

interface ICheckoutProductsListProps {
  items: CartItemType[];
}

const CheckoutProductsList = ({ items }: ICheckoutProductsListProps) => {
  return (
    <ScrollArea className={cn("flex flex-col", "max-h-52")}>
      <List
        items={items}
        renderItem={(checkoutItem) => <CheckoutProductItem {...checkoutItem} />}
        className={cn("flex flex-col gap-3", "pr-3 mb-1")}
      />
    </ScrollArea>
  );
};

export default CheckoutProductsList;
