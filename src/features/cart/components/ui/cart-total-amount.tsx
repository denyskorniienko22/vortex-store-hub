import { cn } from "@/lib/utils"

import { formatPrice } from "@/utils/formatPrice"

interface ICartTotalAmount {
  totalAmount: number
}

const CartTotalAmount = ({ totalAmount }: ICartTotalAmount) => {
  return (
    <p className={cn("w-max rounded-lg", "border", "p-4")}>
      <span className={cn("text-2xl font-semibold", "mr-2")}>Total:</span>
      <span className={cn("inline-block", "text-lg", "pb-1")}>
        {formatPrice(totalAmount)}
      </span>
    </p>
  )
}

export default CartTotalAmount
