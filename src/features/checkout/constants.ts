import { DeliveredSentIcon, Dollar02Icon } from "@hugeicons/core-free-icons"
import type { IconSvgElement } from "@hugeicons/react"

export type RadioOptionType = {
  id: string
  value: string
  label: string
  icon: IconSvgElement
}

export const DELIVERY_OPTIONS = [
  {
    id: "warp-drive-delivery",
    value: "warp-drive-delivery",
    label: "Warp Drive Delivery",
    icon: DeliveredSentIcon,
  },
  {
    id: "vortex-express-delivery",
    value: "vortex-express-delivery",
    label: "Vortex Express Delivery",
    icon: DeliveredSentIcon,
  },
  {
    id: "orbital-post-delivery",
    value: "orbital-post-delivery",
    label: "Orbital Post Delivery",
    icon: DeliveredSentIcon,
  },
]

export const PAYMENT_OPTIONS = [
  {
    id: "secure-card",
    value: "secure-card",
    label: "Secure card payment",
    icon: Dollar02Icon,
  },
  {
    id: "installments",
    value: "payment-in-installments",
    label: "Payment in installments",
    icon: Dollar02Icon,
  },
  { id: "postpaid", value: "postpaid", label: "Postpaid", icon: Dollar02Icon },
]
