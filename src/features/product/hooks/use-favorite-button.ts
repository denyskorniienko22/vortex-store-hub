import { useFetcher } from "react-router"
import type { toggleFavoriteAction } from "../product.api"
import { useCallback, useEffect, type MouseEvent } from "react"
import { PRODUCT_INTENTS } from "../product.constants"
import { toast } from "sonner"

interface IUseFavoriteButtonProps {
  is_favorite: boolean | undefined
}

export const useFavoriteButton = ({ is_favorite }: IUseFavoriteButtonProps) => {
  const fetcher = useFetcher<typeof toggleFavoriteAction>()

  const isSubmitting =
    fetcher.formData?.get("intent") === PRODUCT_INTENTS.TOGGLE_FAVORITE &&
    fetcher.state !== "idle"

  const handleClick = useCallback(
    (event: MouseEvent<HTMLFormElement>) => event.stopPropagation(),
    [],
  )

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data && is_favorite) {
      if (fetcher.data.success) {
        toast.success("Added to favorites successfully!")
      } else if (fetcher.data.errorMessage) {
        toast.error(fetcher.data.errorMessage)
      }
    }

    if (fetcher.state === "idle" && fetcher.data && !is_favorite) {
      if (fetcher.data.success) {
        toast.success("Remove product from favorites successfully!")
      } else if (fetcher.data.errorMessage) {
        toast.error(fetcher.data.errorMessage)
      }
    }
  }, [fetcher.state, fetcher.data])

  return {
    fetcher,
    isSubmitting,
    handleClick,
  }
}
