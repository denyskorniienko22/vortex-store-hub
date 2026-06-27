import { formatPrice } from "@/utils/formatPrice";

interface ICartItemPriceProps {
  price: number;
}

const CartItemPrice = ({ price }: ICartItemPriceProps) => {
  return <p className="text-lg font-semibold">{formatPrice(price)}</p>;
};

export default CartItemPrice;
