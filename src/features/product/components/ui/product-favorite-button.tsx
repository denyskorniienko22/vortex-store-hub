import { FavouriteIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"
import { routes } from "@/root/routes"

import { useFavoriteButton } from "../../hooks/use-favorite-button"
import { PRODUCT_INTENTS } from "../../product.constants"

interface IProductFavoriteButtonProps {
  productId: string
  isFavorite: boolean | undefined
}

const ProductFavoriteButton = ({
  productId,
  isFavorite,
}: IProductFavoriteButtonProps) => {
  const { fetcher, isSubmitting, handleClick } = useFavoriteButton({
    is_favorite: isFavorite,
  })

  return (
    <fetcher.Form method="post" action={routes.CATALOG} onClick={handleClick}>
      <input type="hidden" name="is_favorite" value={String(isFavorite)} />
      <input type="hidden" name="product_id" value={productId} />
      <input
        type="hidden"
        name="intent"
        value={PRODUCT_INTENTS.TOGGLE_FAVORITE}
      />
      <Button
        type="submit"
        disabled={fetcher.state !== "idle"}
        className={cn(
          "flex items-center justify-center",
          "size-10",
          "cursor-pointer",
        )}
      >
        {isSubmitting ? (
          <Spinner className="size-5" />
        ) : (
          <HugeiconsIcon
            icon={FavouriteIcon}
            strokeWidth={2}
            className="size-5"
            color={isFavorite ? "red" : "white"}
            fill={isFavorite ? "red" : "transparent"}
          />
        )}
      </Button>
    </fetcher.Form>
  )
}

export default ProductFavoriteButton
