import { RssErrorIcon } from "@hugeicons/core-free-icons"

import { Spinner } from "@/components/ui/spinner"

import PageLayout from "@/components/layouts/page-layout"
import ProductsViewLayout from "@/components/layouts/products-view-layout"
import ShowMessage from "@/components/ui/show-message"

import { messages } from "@/constants/messages"
import ProductList from "@/features/product/components/product-list"
import { useCatalog } from "@/features/product/hooks/use-catalog"
import SidebarFilters from "@/features/sidebar/components/sidebar-filters"
import { cn } from "@/lib/utils"

const CatalogPage = () => {
  const { products, isCatalogEmpty, isSearching } = useCatalog()

  if (!products) {
    return (
      <PageLayout className="flex items-start gap-3">
        <div className="absolute top-1/2 left-1/2 -translate-1/2">
          <ShowMessage
            title={messages.ERROR.CATALOG.title}
            description={messages.ERROR.CATALOG.description}
            icon={RssErrorIcon}
          />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout className={cn("relative", "flex items-start gap-3")}>
      <SidebarFilters />
      <ProductsViewLayout
        emptyMessageProps={messages.EMPTY.CATALOG}
        isEmpty={isCatalogEmpty}
        title="Catalog"
        totalAmount={products.length}
      >
        {isSearching ? (
          <div className="absolute top-1/3 left-1/2 -translate-1/2">
            <Spinner className="size-16" />
          </div>
        ) : (
          <ProductList products={products} />
        )}
      </ProductsViewLayout>
    </PageLayout>
  )
}

export default CatalogPage
