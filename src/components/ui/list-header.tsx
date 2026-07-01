import { Activity } from "react"

import { cn } from "@/lib/utils"

import { Spinner } from "./spinner"

interface IListHeaderProps {
  title: string
  totalAmount: number
  isSearching?: boolean
}

const ListHeader = ({ title, totalAmount, isSearching }: IListHeaderProps) => {
  return (
    <section
      className={cn(
        "flex items-center gap-3",
        "xs:flex-col xs:items-start xs:gap-1.5",
        "xsm:flex-row xsm:items-center xsm:gap-3",
      )}
    >
      <Activity mode={totalAmount > 0 || isSearching ? "visible" : "hidden"}>
        <h1 className="text-2xl font-black tracking-tight uppercase text-foreground">
          {title}
        </h1>
        <span
          className={cn(
            "rounded",
            "bg-muted",
            "border border-border/40",
            "text-sm font-mono font-medium text-muted-foreground",
            "transition-opacity",
            "px-2 py-0.5",
          )}
        >
          {isSearching ? <Spinner /> : `[${totalAmount} units deployed]`}
        </span>
      </Activity>
    </section>
  )
}

export default ListHeader
