import { type ActionFunctionArgs, redirect } from "react-router"

import { DATABASE_TABLES } from "@/constants/database-tables"
import { supabase } from "@/lib/supabase"
import { routes } from "@/root/routes"

import type {
  ProductItemLoaderResult,
  ProductType,
  ProductsLoaderResult,
} from "./product.type"

export const productLoader = async ({
  request,
}: ActionFunctionArgs): Promise<ProductsLoaderResult | undefined> => {
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get("search") || ""

  const minPrice = url.searchParams.get("min_price")
  const maxPrice = url.searchParams.get("max_price")

  const selectedBrands = url.searchParams.getAll("brand")

  const {
    data: { user },
  } = await supabase.auth.getUser()

  let query = supabase
    .from(DATABASE_TABLES.PRODUCTS)
    .select(
      `
        *,
        is_favorite: favorites(id)
      `,
    )
    .eq("favorites.user_id", user?.id || "00000000-0000-0000-0000-000000000000")
    .ilike("name", `%${searchTerm}%`)

  if (selectedBrands.length !== 0) query.in("brand", selectedBrands)

  if (minPrice) query = query.gte("price", minPrice)
  if (maxPrice) query = query.lte("price", maxPrice)

  const specFilters = [
    { param: "os", path: ">os" },
    { param: "processor", path: "processor->>model" },
    { param: "ram_type", path: "ram->>type" },
    { param: "ram_size", path: "ram->>size_gb" },
    { param: "graphics_model", path: "graphics->>model" },
    { param: "storage_type", path: "storage->>type" },
    { param: "case_color", path: "case->>color" },
    { param: "cores_capacity", path: "processor->>cores" },
  ]

  specFilters.forEach(({ param, path }) => {
    const values = url.searchParams.getAll(param)
    if (values.length > 0) {
      query = query.in(`specifications->${path}`, values)
    }
  })

  const { data, error } = await query.order("price", { ascending: true })

  if (error) {
    return {
      products: undefined,
      errorMessage: "Failed to load products",
    }
  }

  const products = data?.map((product: ProductType) => ({
    ...product,
    is_favorite: Array.isArray(product.is_favorite)
      ? product.is_favorite.length > 0
      : !!product.is_favorite,
  })) as ProductType[]

  return {
    products,
  }
}

export const productItemLoader = async ({
  params,
}: ActionFunctionArgs): Promise<ProductItemLoaderResult | Response> => {
  const { slug } = params

  const productId = slug?.split("=")[0]

  const { data, error } = await supabase
    .from(DATABASE_TABLES.PRODUCTS)
    .select("*")
    .eq("id", productId)
    .single()

  if (!data) return redirect(routes.CATALOG)

  if (error) {
    return {
      product: undefined,
      errorMessage: "Failed to load product details",
    }
  }

  const product = data as unknown as ProductType

  return {
    product,
  }
}

export const favoriteProductsLoader = async (): Promise<
  ProductsLoaderResult | Response
> => {
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return redirect(routes.CATALOG)

  const { data, error } = await supabase
    .from(DATABASE_TABLES.FAVORITES)
    .select(
      `
      id,
      product:product_id (
        id,
        name,
        price,
        image_url,
        specifications,
        brand
      )
    `,
    )
    .eq("user_id", user?.id)

  if (error) {
    return {
      products: undefined,
      errorMessage: "Failed to get favorite products",
    }
  }

  const favoriteProducts = data
    ?.map((item: any) => {
      const p = Array.isArray(item.products) ? item.product[0] : item.product

      if (!p) return null

      return {
        ...p,
        is_favorite: true,
      }
    })
    .filter(Boolean) as ProductType[]

  return { products: favoriteProducts }
}
