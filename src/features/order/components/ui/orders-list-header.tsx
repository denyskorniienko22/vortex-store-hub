import { cn } from "@/lib/utils"

interface IOrdersListHeaderProps {
  order_id: string
  total_amount: number
  total_items: number
}

const OrdersListHeader = ({
  order_id,
  total_amount,
  total_items,
}: IOrdersListHeaderProps) => {
  return (
    <header
      className={cn(
        "flex flex-wrap justify-between items-center gap-4",
        "bg-gray-50 border-b",
        "px-6 py-4 ",
      )}
    >
      <div>
        <p className="text-xs text-start text-gray-500 uppercase tracking-wider">
          Order ID
        </p>
        <p className="text-sm font-mono text-gray-400">
          #{order_id.slice(0, 8)}
        </p>
      </div>
      <div className="flex gap-8">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Total
          </p>
          <p className="font-bold text-blue-600">
            {total_amount.toLocaleString()} ₴
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Items
          </p>
          <p className="font-medium">{total_items}</p>
        </div>
      </div>
    </header>
  )
}

export default OrdersListHeader
