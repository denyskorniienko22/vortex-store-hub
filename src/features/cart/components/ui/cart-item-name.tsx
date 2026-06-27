import { cn } from "@/lib/utils"

import type { CartItemType } from "../../cart.types"

interface ICartItemNameProps extends Pick<
  CartItemType,
  "specifications" | "name"
> {}

const CartItemName = ({ name, specifications }: ICartItemNameProps) => {
  const { graphics, processor, ram, storage } = specifications

  return (
    <h1
      className={cn(
        "max-w-1/3",
        "text-xl font-semibold leading-snug tracking-tight",
        "transition-colors",
        "group-hover:text-primary",
        "line-clamp-3",
        "xs:max-w-max",
        "xsm:text-base",
        "sm:text-xl",
      )}
    >
      Computer {name} -- {processor.model} / RAM {ram.size_gb} / SSD{" "}
      {storage.capacity_gb} GB / {graphics.model}, {graphics.video_memory}
    </h1>
  )
}

export default CartItemName
