import type { ProductType } from "../product/product.type";

export type OrderProduct = {
  id: string;
  quantity: number;
  price_at_purchase: number;
  product: Omit<
    ProductType,
    "slug" | "is_favorite" | "price" | "specifications"
  >;
};

export type OrderType = {
  id: string;
  user_id: string;
  total_amount: number;
  name: string;
  surname: string;
  phone: string;
  way_to_deliver: string;
  way_to_payment: string;
  order_products: OrderProduct[];
};

export type OrderItemLoaderResultType = {
  orders: OrderType[] | undefined;
  errorMessage?: string;
};
