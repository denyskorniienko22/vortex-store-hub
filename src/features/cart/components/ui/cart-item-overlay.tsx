import { cn } from "@/lib/utils"

import { Spinner } from "@/components/ui/spinner"

const CartItemOverlay = () => {
  return (
    <div
      className={cn(
        "absolute z-10 inset-0",
        "flex items-center justify-center",
        "backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center gap-2",
          "text-3xl text-red-600",
        )}
      >
        <span className="font-semibold">Removing...</span>
        <Spinner className="size-8" />
      </div>
    </div>
  )
}

export default CartItemOverlay
