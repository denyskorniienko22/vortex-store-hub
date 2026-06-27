import { Activity, useState } from "react";

import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

interface IProductImageProps {
  src: string;
  alt: string;
}

const ProductImage = ({ alt, src }: IProductImageProps) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  return (
    <div
      className={cn(
        "relative",
        "aspect-square",
        "bg-muted/20",
        "overflow-hidden",
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsImageLoading(false)}
        className={cn("size-full object-contain")}
      />
      <Activity mode={isImageLoading ? "visible" : "hidden"}>
        <div className="absolute top-1/2 left-1/2 -translate-1/2">
          <Spinner className="size-10" />
        </div>
      </Activity>
    </div>
  );
};

export default ProductImage;
