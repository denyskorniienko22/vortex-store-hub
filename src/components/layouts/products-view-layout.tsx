import type { ReactNode } from "react"

import type { MessageItemType } from "@/constants/messages"
import { cn } from "@/lib/utils"

import ShowMessage from "../ui/show-message"
import ListHeader from "../ui/list-header"

interface IProductsViewLayoutProps {
  title: string
  totalAmount: number
  isEmpty: boolean
  emptyMessageProps: MessageItemType
  children: ReactNode
  className?: string
}

const ProductsViewLayout = ({
  children,
  emptyMessageProps,
  isEmpty,
  title,
  totalAmount,
  className,
}: IProductsViewLayoutProps) => {
  return (
    <div className={cn("grid gap-3 flex-1", className)}>
      <ListHeader title={title} totalAmount={totalAmount} />
      {isEmpty ? (
        <div className="absolute top-1/2 left-1/2 -translate-1/2">
          <ShowMessage
            icon={emptyMessageProps.icon}
            title={emptyMessageProps.title}
            description={emptyMessageProps.description}
            btnText={emptyMessageProps.btnText}
          />
        </div>
      ) : (
        children
      )}
    </div>
  )
}

export default ProductsViewLayout
