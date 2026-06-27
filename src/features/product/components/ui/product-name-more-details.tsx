import { cn } from "@/lib/utils";

import type { ProductSpecificationsType } from "../../product.type";

interface IProductNameMoreDetailsProps {
  name: string | undefined;
  specifications: ProductSpecificationsType | undefined;
}

const ProductNameMoreDetails = ({
  name,
  specifications,
}: IProductNameMoreDetailsProps) => {
  return (
    <h1
      className={cn(
        "text-2xl font-bold leading-snug tracking-tight",
        "transition-colors",
        "group-hover:text-primary",
        "xs:text-lg xsm:text-2xl",
      )}
    >
      Computer {name} -- {specifications?.processor.model} / RAM{" "}
      {specifications?.ram.size_gb} / SSD {specifications?.storage.capacity_gb}{" "}
      GB / {specifications?.graphics.model},{" "}
      {specifications?.graphics.video_memory}
    </h1>
  );
};

export default ProductNameMoreDetails;
