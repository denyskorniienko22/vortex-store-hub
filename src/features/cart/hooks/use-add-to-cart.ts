import type { productActions } from "@/features/product/product.actions"
import { PRODUCT_INTENTS } from "@/features/product/product.constants"
import { useEffect } from "react"
import { useFetcher } from "react-router"
import { toast } from "sonner"

export const useAddToCart = () => {
  const fetcher = useFetcher<typeof productActions>()

  const isAddingToCart =
    fetcher.formData?.get("intent") === PRODUCT_INTENTS.ADD_TO_CART &&
    fetcher.state !== "idle"

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      if (fetcher.data.success) {
        toast.success("Added to cart successfully!")
      } else if (fetcher.data.errorMessage) {
        toast.error(fetcher.data.errorMessage)
      }
    }
  }, [fetcher.state, fetcher.data])

  return {
    fetcher,
    isAddingToCart,
  }
}
