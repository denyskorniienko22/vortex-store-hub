import { cn } from "@/lib/utils"

import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"

interface IProductSpecBadgeProps {
  label: string
  value: string
  badgeIcon: IconSvgElement
}

const ProductSpecBadge = ({
  label,
  value,
  badgeIcon,
}: IProductSpecBadgeProps) => {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={cn("rounded-lg", "bg-secondary/50", "text-primary", "p-1.5")}
      >
        <HugeiconsIcon icon={badgeIcon} size={16} />
      </div>
      <div className={cn("flex flex-col", "overflow-hidden")}>
        <span
          className={cn(
            "text-[10px] text-muted-foreground leading-none",
            "mb-1",
          )}
        >
          {label}
        </span>
        <span className={cn("text-xs font-bold", "truncate")}>{value}</span>
      </div>
    </div>
  )
}

export default ProductSpecBadge
