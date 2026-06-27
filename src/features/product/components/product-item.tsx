import { Activity } from "react"

import { Link, useRouteLoaderData } from "react-router"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { authLoader } from "@/features/auth/auth.loader"
import AddToCartButton from "@/features/cart/components/add-to-cart-button"
import { cn } from "@/lib/utils"
import { routes } from "@/root/routes"

import { getSpecificationsGroup } from "../product.constants"
import type { ProductType } from "../product.type"

import {
  ProductFavoriteButton,
  ProductHeader,
  ProductImage,
  ProductLearnMore,
  ProductPricing,
  ProductSpecsList,
} from "./"

interface IProductItemProps extends ProductType {}

const ProductItem = ({
  id,
  image_url,
  name,
  price,
  slug,
  specifications,
  is_favorite,
  brand,
}: IProductItemProps) => {
  const user = useRouteLoaderData<typeof authLoader>("root")
  const isUserLoggedIn = user && true

  const productShortSpecifications = getSpecificationsGroup(specifications, 2)

  console.log(is_favorite)

  return (
    <Card
      className={cn(
        "relative",
        "flex flex-col",
        "rounded-xl",
        "border-muted bg-card",
        "transition-all duration-300",
        "pt-0",
        "overflow-hidden group",
        "hover:shadow-xl hover:border-primary/40",
      )}
    >
      <Activity mode={isUserLoggedIn ? "visible" : "hidden"}>
        <div className="absolute z-10 top-2 right-4">
          <ProductFavoriteButton productId={id} isFavorite={is_favorite} />
        </div>
      </Activity>

      <Link to={`${routes.CATALOG}/${id}=${slug}`}>
        <ProductImage src={image_url} alt={name} />
      </Link>

      <CardContent className={cn("flex flex-col grow gap-4", "p-5")}>
        <ProductHeader productName={name} productBrand={brand} />
        <ProductSpecsList specifications={productShortSpecifications} />
        <ProductLearnMore id={id} slug={slug} />
      </CardContent>

      <CardFooter className={cn("flex flex-col gap-4", "p-5 pt-1 mt-auto")}>
        <ProductPricing price={price} />
        <AddToCartButton productId={id} />
      </CardFooter>
    </Card>
  )
}

export default ProductItem
