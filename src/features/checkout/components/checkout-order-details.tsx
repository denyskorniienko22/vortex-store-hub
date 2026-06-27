import type { CartItemType } from "@/features/cart/cart.types";
import { cn } from "@/lib/utils";

import CheckoutProductsList from "./ui/checkout-products-list";

interface ICheckoutOrderDetailsProps {
  items: CartItemType[];
}

const CheckoutOrderDetails = ({ items }: ICheckoutOrderDetailsProps) => {
  return (
    <div className={cn("rounded-md", "bg-slate-100/70", "p-4")}>
      <h3 className={cn("text-base font-bold", "pb-3")}>
        Order <span className="font-normal">{items.length} product(s)</span>
      </h3>
      <CheckoutProductsList items={items} />
    </div>
  );
};

export default CheckoutOrderDetails;
