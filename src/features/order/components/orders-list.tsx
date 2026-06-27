import type { OrderType } from "../order.types"
import OrderItemsList from "./order-items-list"
import OrdersListFooter from "./ui/orders-list-footer"
import OrdersListHeader from "./ui/orders-list-header"

interface IOrdersListProps {
  orders: OrderType[]
}

const OrdersList = ({ orders }: IOrdersListProps) => {
  return (
    <ul className="flex flex-col gap-4">
      {orders?.map((order) => {
        const totalItems = order.order_products.reduce(
          (acc, item) => acc + item.quantity,
          0,
        )

        return (
          <li key={order.id} className="bg-white shadow-sm border">
            <OrdersListHeader
              order_id={order.id}
              total_amount={order.total_amount}
              total_items={totalItems}
            />
            <main className="px-6 py-4">
              <OrderItemsList order_products={order.order_products} />
            </main>
            <OrdersListFooter
              way_to_deliver={order.way_to_deliver}
              way_to_payment={order.way_to_payment}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default OrdersList
