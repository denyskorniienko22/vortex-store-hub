import { cn } from "@/lib/utils"

interface IOrdersListFooterProps {
  way_to_payment: string
  way_to_deliver: string
}

const OrdersListFooter = ({
  way_to_deliver,
  way_to_payment,
}: IOrdersListFooterProps) => {
  const payment = way_to_payment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const deliver = way_to_deliver
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <footer
      className={cn(
        "flex justify-between",
        "bg-gray-50/50 border-t",
        "text-sm text-gray-600",
        "px-6 py-3",
        "xs:flex-col xs:gap-y-2",
        "sm:flex-row",
      )}
    >
      <p>
        Payment: <span className="italic font-semibold">{payment}</span>
      </p>
      <p>
        Delivery: <span className="italic font-semibold">{deliver}</span>
      </p>
    </footer>
  )
}

export default OrdersListFooter
