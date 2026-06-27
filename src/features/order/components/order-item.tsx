import { cn } from "@/lib/utils"
import type { OrderProduct } from "../order.types"

interface IOrderItemProps extends OrderProduct {}

const OrderItem = ({
  price_at_purchase,
  product,
  quantity,
}: IOrderItemProps) => {
  const { brand, image_url, name } = product

  return (
    <div
      className={cn(
        "flex items-center gap-4",
        "border-b border-gray-100",
        "py-2",
        "last:border-0",
      )}
    >
      <div className={cn("bg-gray-100 rounded-md")}>
        <img
          src={image_url}
          alt={name}
          className={cn("shrink-0", "size-20 object-cover")}
          loading="lazy"
        />
      </div>
      <div className={cn("flex-1", "min-w-0")}>
        <h4 className={cn("font-semibold text-gray-900", "truncate")}>
          {name}
        </h4>
        <p className="text-sm text-gray-500">Brand: {brand}</p>
        <p className={cn("text-sm", "mt-1")}>
          <span className="font-medium">
            {price_at_purchase.toLocaleString()} ₴
          </span>
          <span className={cn("text-gray-400", "ml-2")}>
            x {quantity} units
          </span>
        </p>
      </div>
      <div className={cn("hidden", "text-right", "pr-4", "sm:block")}>
        <p className="font-bold text-gray-900">
          {(price_at_purchase * quantity).toLocaleString()} ₴
        </p>
      </div>
    </div>
  )
}

export default OrderItem
