import { redirect } from "react-router"

import { DATABASE_TABLES } from "@/constants/database-tables"
import { supabase } from "@/lib/supabase"
import { routes } from "@/root/routes"

import type {
  CartItemLoaderResultType,
  CartItemResponseType,
  CartItemType,
} from "./cart.types"

export const cartLoader = async (): Promise<
  Response | CartItemLoaderResultType
> => {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return redirect(routes.CATALOG)

  const { data, error } = await supabase
    .from(DATABASE_TABLES.CART)
    .select(
      `
      id,
      quantity,
      product:product_id (
        id,
        name,
        price,
        image_url,
        specifications
      )
    `,
    )
    .eq("user_id", user.id)

  if (error) {
    return {
      cartItems: undefined,
      totalAmount: 0,
      errorMessage: "Failed to fetch cart products",
    }
  }

  const cartItems: CartItemType[] = (
    data as unknown as CartItemResponseType[]
  ).map((item: CartItemResponseType) => ({
    cartId: item.id,
    productId: item.product.id,
    name: item.product.name,
    image_url: item.product.image_url,
    price: item.product.price,
    quantity: item.quantity,
    specifications: item.product.specifications,
  }))

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  return { cartItems, totalAmount }
}
