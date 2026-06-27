import { cn } from "@/lib/utils"

import { CardDescription, CardTitle } from "@/components/ui/card"

interface IProductHeaderProps {
  productName: string
  productBrand: string
}

const ProductHeader = ({ productName, productBrand }: IProductHeaderProps) => {
  return (
    <div className="space-y-1">
      <CardDescription
        className={cn(
          "text-xs uppercase tracking-widest text-muted-foreground",
          "mb-1",
        )}
      >
        Gaming PC {productBrand}
      </CardDescription>
      <CardTitle
        className={cn(
          "text-lg font-bold leading-snug",
          "transition-colors",
          "line-clamp-2 truncate",
          "group-hover:text-primary",
        )}
      >
        {productName}
      </CardTitle>
    </div>
  )
}

export default ProductHeader
