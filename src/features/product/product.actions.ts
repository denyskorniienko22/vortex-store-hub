import type { ActionFunctionArgs } from "react-router"

import { supabase } from "@/lib/supabase"

import { addToCartAction, toggleFavoriteAction } from "./product.api"
import { PRODUCT_INTENTS } from "./product.constants"

export const productActions = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()

  const intent = formData.get("intent")

  const productId = formData.get("product_id") as string
  const is_favorite = formData.get("is_favorite") === "true"

  const {
    data: { user },
  } = await supabase.auth.getUser()

  switch (intent) {
    case PRODUCT_INTENTS.TOGGLE_FAVORITE:
      return toggleFavoriteAction(user?.id, productId, is_favorite)

    case PRODUCT_INTENTS.ADD_TO_CART:
      return addToCartAction(user?.id, productId)
  }
}
