import type { ProductSpecificationsType, ProductType } from "../product/product.type";

export type CartItemSpecificationsType = Pick<
  ProductSpecificationsType,
  "processor" | "ram" | "storage" | "graphics"
>;

export type CartItemResponseType = {
  id: string;
  quantity: number;
  product: ProductType;
};

export type CartItemType = {
  cartId: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
  specifications: CartItemSpecificationsType;
};

export type CartItemLoaderResultType = {
  cartItems: CartItemType[] | undefined;
  totalAmount: number;
  errorMessage?: string;
};
