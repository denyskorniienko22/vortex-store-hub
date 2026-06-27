import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router"

import { authActions } from "@/features/auth/auth.actions"
import { authLoader } from "@/features/auth/auth.loader"
import { cartActions } from "@/features/cart/cart.actions"
import { cartLoader } from "@/features/cart/cart.loader"
import { checkoutAction } from "@/features/checkout/checkout.action"
import { checkoutLoader } from "@/features/checkout/checkout.loader"
import { orderLoader } from "@/features/order/order.loader"
import { productActions } from "@/features/product/product.actions"
import {
  favoriteProductsLoader,
  productItemLoader,
  productLoader,
} from "@/features/product/product.loader"
import { ProductFiltersProvider } from "@/features/sidebar/provider/product-filters-context"
import CartPage from "@/pages/cart-page"
import CatalogPage from "@/pages/catalog-page"
import CheckoutPage from "@/pages/checkout-page"
import FavoriteProductsPage from "@/pages/favorite-products-page"
import LoginPage from "@/pages/login-page"
import ProductPage from "@/pages/product-page"
import RegisterPage from "@/pages/register-page"
import UserOrdersPage from "@/pages/user-orders-page"
import { routes } from "@/root/routes"
import { notFoundRedirectLoader } from "./not-found-redirect.loader"

const router = createBrowserRouter([
  {
    id: "root",
    loader: authLoader,
    children: [
      {
        index: true,
        loader: () => redirect(routes.CATALOG),
      },
      {
        element: (
          <ProductFiltersProvider>
            <Outlet />
          </ProductFiltersProvider>
        ),
        children: [
          {
            path: routes.CATALOG,
            element: <CatalogPage />,
            loader: productLoader,
            action: productActions,
          },
          {
            path: routes.PRODUCT,
            element: <ProductPage />,
            loader: productItemLoader,
            action: productActions,
          },
          {
            path: routes.FAVORITE_PRODUCTS,
            element: <FavoriteProductsPage />,
            loader: favoriteProductsLoader,
            action: productActions,
          },
          {
            path: routes.CART,
            element: <CartPage />,
            loader: cartLoader,
            action: cartActions,
          },
          {
            path: routes.USER_ORDERS,
            element: <UserOrdersPage />,
            loader: orderLoader,
          },
        ],
      },
      {
        path: routes.CHECKOUT,
        element: <CheckoutPage />,
        loader: checkoutLoader,
        action: checkoutAction,
      },
      {
        path: routes.LOGIN,
        element: <LoginPage />,
        action: authActions,
      },
      {
        path: routes.REGISTER,
        element: <RegisterPage />,
        action: authActions,
      },
      {
        path: routes.LOGOUT,
        action: authActions,
      },
      {
        path: "*",
        loader: notFoundRedirectLoader,
      },
    ],
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
