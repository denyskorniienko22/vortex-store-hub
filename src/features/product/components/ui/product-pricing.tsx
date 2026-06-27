import { cn } from "@/lib/utils";
import { formatPrice } from "@/utils/formatPrice";

interface IProductPricingProps {
  price: number
}

const ProductPricing = ({ price }: IProductPricingProps) => {
  return (
    <span
      className={cn(
        "w-full",
        "text-2xl font-black tracking-tight text-foreground",
        "transition-colors",
        "group-hover:text-primary",
        "xs:text-lg xsm:text-2xl",
      )}
    >
      {formatPrice(price)}
    </span>
  );
};

export default ProductPricing;
