import { RssErrorIcon } from "@hugeicons/core-free-icons"

import List from "@/components/ui/list"

import PageLayout from "@/components/layouts/page-layout"
import ProductsViewLayout from "@/components/layouts/products-view-layout"
import ShowMessage from "@/components/ui/show-message"

import { messages } from "@/constants/messages"
import ProductItem from "@/features/product/components/product-item"
import { useFavoriteProducts } from "@/features/product/hooks/use-favorite-products"
import { cn } from "@/lib/utils"

const FavoriteProductsPage = () => {
  const { favoriteProducts, isFavoritesProductsEmpty } = useFavoriteProducts()

  if (!favoriteProducts) {
    return (
      <PageLayout>
        <div className="absolute top-1/2 left-1/2 -translate-1/2">
          <ShowMessage
            title={messages.ERROR.FAVORITES.title}
            description={messages.ERROR.FAVORITES.description}
            icon={RssErrorIcon}
            btnText={messages.ERROR.FAVORITES.btnText}
          />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <ProductsViewLayout
        emptyMessageProps={messages.EMPTY.FAVORITES}
        isEmpty={isFavoritesProductsEmpty}
        title="Favorites"
        totalAmount={favoriteProducts.length}
      >
        <List
          items={favoriteProducts}
          renderItem={(favoriteItem) => <ProductItem {...favoriteItem} />}
          className={cn(
            "grid grid-cols-5 gap-5",
            "xs:grid-cols-1",
            "xsm:grid-cols-2",
            "md:grid-cols-3",
            "lg:grid-cols-4",
            "2xl:grid-cols-5",
          )}
        />
      </ProductsViewLayout>
    </PageLayout>
  )
}

export default FavoriteProductsPage
