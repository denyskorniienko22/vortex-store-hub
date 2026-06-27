import type { ProductType } from "./product.type"

import {
  GraphicCardIcon,
  HardDriveIcon,
  FlashIcon,
  ComputerIcon,
  ChipIcon,
  MenuSquareIcon,
} from "@hugeicons/core-free-icons"
import { type IconSvgElement } from "@hugeicons/react"

export const PRODUCT_INTENTS = {
  TOGGLE_FAVORITE: "toggle-favorite",
  ADD_TO_CART: "add-to-cart",
} as const

type SpecificationItemType = {
  label: string
  value: string | number
  icon: IconSvgElement
}

export type SpecificationType = {
  title: string
  items: SpecificationItemType[]
}

export const getSpecificationsGroup = (
  specs: ProductType["specifications"],
  count: number | "all" = "all",
): SpecificationType[] => {
  const allSpecifications: SpecificationType[] = [
    {
      title: "CPU",
      items: [
        {
          label: "Model",
          value: specs.processor.model,
          icon: ChipIcon,
        },
        {
          label: "Cores",
          value: specs.processor.cores,
          icon: ChipIcon,
        },
        {
          label: "Frequency",
          value: `${specs.processor.frequency_ghz} GHz`,
          icon: ChipIcon,
        },
      ],
    },
    {
      title: "GPU",
      items: [
        { label: "Model", value: specs.graphics.model, icon: GraphicCardIcon },
        { label: "Type", value: specs.graphics.type, icon: GraphicCardIcon },
        {
          label: "Memory",
          value: specs.graphics.video_memory,
          icon: GraphicCardIcon,
        },
      ],
    },
    {
      title: "RAM",
      items: [
        { label: "Type", value: specs.ram.type, icon: MenuSquareIcon },
        {
          label: "Size",
          value: specs.ram.size_gb,
          icon: MenuSquareIcon,
        },
      ],
    },
    {
      title: "SSD",
      items: [
        {
          label: "Type",
          value: specs.storage.type,
          icon: HardDriveIcon,
        },
        {
          label: "Size",
          value: `${specs.storage.capacity_gb} GB`,
          icon: HardDriveIcon,
        },
      ],
    },
    {
      title: "Power Supply",
      items: [
        {
          label: "Position",
          value: specs.power_supply.position,
          icon: FlashIcon,
        },
        {
          label: "Wattage",
          value: specs.power_supply.wattage,
          icon: FlashIcon,
        },
      ],
    },
    {
      title: "Case",
      items: [
        {
          label: "Color",
          value: specs.case.color,
          icon: ComputerIcon,
        },
        {
          label: "Fans",
          value: specs.case.installed_fans.toString(),
          icon: ComputerIcon,
        },
      ],
    },
  ]

  if (count === "all") return allSpecifications
  const safeCount = Math.min(Math.max(1, count), allSpecifications.length)

  return allSpecifications.slice(0, safeCount)
}
