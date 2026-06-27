import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { CartItemType } from "@/features/cart/cart.types";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/utils/formatPrice";

interface ICheckoutProductItemProps extends CartItemType {}

const CheckoutProductItem = ({
  image_url,
  name,
  quantity,
  price,
}: ICheckoutProductItemProps) => {
  return (
    <Card className="p-0 h-26 rounded-md">
      <CardContent className="p-0 flex flex-row gap-x-3">
        <img
          src={image_url}
          alt={name}
          className="object-cover max-w-26 shrink-0"
          loading="lazy"
        />
        <section className={cn("flex flex-col", "h-full", "py-1")}>
          <CardTitle className="font-medium pb-1">{name}</CardTitle>
          <span className="text-gray-400 text-base">{quantity} piece(s)</span>
          <p className={cn("font-semibold text-base", "mt-auto")}>
            {formatPrice(price)}
          </p>
        </section>
      </CardContent>
    </Card>
  );
};

export default CheckoutProductItem;
