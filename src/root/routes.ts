export const routes = {
  CATALOG: "/catalog",
  PRODUCT: "/catalog/:slug",
  LOGIN: "/login",
  REGISTER: "/register",
  LOGOUT: "/logout",
  FAVORITE_PRODUCTS: "/favorites",
  CART: "/cart",
  CHECKOUT: "/checkout",
  USER_ORDERS: "/orders",
} as const

export type RoutesType = (typeof routes)[keyof typeof routes]
export type AuthRoutesType = Extract<RoutesType, "/login" | "/register">
