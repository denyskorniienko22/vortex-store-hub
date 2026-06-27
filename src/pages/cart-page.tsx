import PageLayout from "@/components/layouts/page-layout"
import ProductsViewLayout from "@/components/layouts/products-view-layout"
import ShowMessage from "@/components/ui/show-message"

import { messages } from "@/constants/messages"
import CartItemsList from "@/features/cart/components/cart-items-list"
import CartCheckoutButton from "@/features/cart/components/ui/cart-checkout-button"
import { useCart } from "@/features/cart/hooks/use-cart"
import { cn } from "@/lib/utils"

const CartPage = () => {
  const { cartItems, isCartEmpty } = useCart()

  if (!cartItems) {
    return (
      <PageLayout>
        <div className="absolute top-1/2 left-1/2 -translate-1/2">
          <ShowMessage
            title={messages.ERROR.CART.title}
            description={messages.ERROR.CART.description}
            icon={messages.ERROR.CART.icon}
            btnText={messages.ERROR.CART.btnText}
          />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <ProductsViewLayout
        emptyMessageProps={messages.EMPTY.CART}
        isEmpty={isCartEmpty}
        title="Cart products"
        totalAmount={cartItems.length}
      >
        <CartItemsList cartItems={cartItems} />
        <div className={cn("flex justify-center", "mt-6")}>
          <CartCheckoutButton />
        </div>
      </ProductsViewLayout>
    </PageLayout>
  )
}

export default CartPage
