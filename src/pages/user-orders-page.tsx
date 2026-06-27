import PageLayout from "@/components/layouts/page-layout"
import ProductsViewLayout from "@/components/layouts/products-view-layout"
import ShowMessage from "@/components/ui/show-message"

import { messages } from "@/constants/messages"
import OrdersList from "@/features/order/components/orders-list"
import { useOrders } from "@/features/order/hooks/use-orders"

const UserOrdersPage = () => {
  const { orders, isUserOrdersEmpty } = useOrders()

  if (!orders) {
    return (
      <PageLayout>
        <ShowMessage
          title={messages.ERROR.USER_ORDERS.title}
          description={messages.ERROR.USER_ORDERS.description}
          icon={messages.ERROR.USER_ORDERS.icon}
          btnText={messages.ERROR.USER_ORDERS.btnText}
        />
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <ProductsViewLayout
        emptyMessageProps={messages.EMPTY.USER_ORDERS}
        isEmpty={isUserOrdersEmpty}
        title="Order history"
        totalAmount={orders.length}
      >
        <OrdersList orders={orders} />
      </ProductsViewLayout>
    </PageLayout>
  )
}

export default UserOrdersPage
