import { RssErrorIcon } from "@hugeicons/core-free-icons"

import PageLayout from "@/components/layouts/page-layout"
import ShowMessage from "@/components/ui/show-message"

import { messages } from "@/constants/messages"
import AddToCartButton from "@/features/cart/components/add-to-cart-button"
import {
  ProductImage,
  ProductPricing,
  ProductSpecsList,
} from "@/features/product/components"
import ProductNameMoreDetails from "@/features/product/components/ui/product-name-more-details"
import { useProduct } from "@/features/product/hooks/use-product"
import { getSpecificationsGroup } from "@/features/product/product.constants"
import { cn } from "@/lib/utils"

const ProductPage = () => {
  const { product } = useProduct()

  if (!product) {
    return (
      <PageLayout>
        <div className="absolute top-1/2 left-1/2 -translate-1/2">
          <ShowMessage
            title={messages.ERROR.PRODUCT.title}
            description={messages.ERROR.PRODUCT.description}
            icon={RssErrorIcon}
            btnText={messages.ERROR.PRODUCT.btnText}
          />
        </div>
      </PageLayout>
    )
  }

  const { specifications, image_url, name, price, id } = product
  const allSpecifications = getSpecificationsGroup(specifications)

  return (
    <PageLayout
      className={cn("grid grid-cols-2 gap-3", "xs:grid-cols-1 md:grid-cols-2")}
    >
      <div
        className={cn("shrink-0", "rounded-lg", "bg-black/3", "p-6", "h-max")}
      >
        <ProductImage src={image_url} alt={name} />
      </div>
      <section className="flex flex-col gap-4">
        <header className={cn("space-y-3", "rounded-lg", "bg-black/3", "p-4")}>
          <ProductNameMoreDetails name={name} specifications={specifications} />
          <ProductPricing price={price} />
        </header>
        <main className={cn("rounded-lg", "bg-black/3", "p-4")}>
          <ProductSpecsList specifications={allSpecifications} />
        </main>
        <AddToCartButton productId={id} />
      </section>
    </PageLayout>
  )
}

export default ProductPage
