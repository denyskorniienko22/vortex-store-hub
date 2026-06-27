import { cn } from "@/lib/utils"

import type { SpecificationType } from "../../product.constants"

import ProductSpecBadge from "./product-spec-badge"

import { Separator } from "@/components/ui/separator"

interface IProductSpecsListProps {
  specifications: SpecificationType[]
}

const ProductSpecsList = ({ specifications }: IProductSpecsListProps) => {
  return (
    <ul className="flex flex-col gap-y-5">
      {specifications.map(({ title, items }) => (
        <li key={title} className="group/spec">
          <h3 className={cn("text-md font-semibold", "pb-1")}>{title}</h3>
          <ul className="grid grid-cols-2 gap-3">
            {items.map((spec) => (
              <li key={spec.label} className="h-fit">
                <ProductSpecBadge
                  badgeIcon={spec.icon}
                  label={spec.label}
                  value={spec.value.toString()}
                />
              </li>
            ))}
          </ul>
          <Separator
            className={cn("mt-4 opacity-60", "group-last/spec:hidden")}
          />
        </li>
      ))}
    </ul>
  )
}

export default ProductSpecsList
