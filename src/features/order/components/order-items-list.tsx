import { ScrollArea } from "@/components/ui/scroll-area"
import type { OrderProduct } from "../order.types"
import OrderItem from "./order-item"
import { cn } from "@/lib/utils"

interface IOrderItemsListProps {
  order_products: OrderProduct[]
}

const OrderItemsList = ({ order_products }: IOrderItemsListProps) => {
  return (
    <ScrollArea className={cn("flex flex-col", "max-h-50")}>
      <ul className="flex flex-col gap-2">
        {order_products.map((item) => (
          <li key={item.id}>
            <OrderItem {...item} />
          </li>
        ))}
      </ul>
    </ScrollArea>
  )
}

export default OrderItemsList
