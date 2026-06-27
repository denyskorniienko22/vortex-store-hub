import { Form } from "react-router"

import { Search01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"
import { routes } from "@/root/routes"

import { useProductSearch } from "@/features/product/hooks/use-product-search"

const HeaderSearch = () => {
  const { defaultValue, isSearching, onChange } = useProductSearch()

  return (
    <Form
      key={defaultValue ? "active" : "empty"}
      method="get"
      action={routes.CATALOG}
      className={cn(
        "relative",
        "w-full max-w-md h-9",
        "group",
        "sm:max-w-60 lg:max-w-md",
      )}
    >
      {isSearching ? (
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <Spinner className="size-5" />
        </div>
      ) : (
        <HugeiconsIcon
          icon={Search01Icon}
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2",
            "size-5",
            "text-muted-foreground",
            "transition-colors",
            "group-focus-within:text-primary",
          )}
        />
      )}

      <Input
        type="text"
        name="search"
        placeholder="Search PC..."
        defaultValue={defaultValue}
        onChange={onChange}
        className={cn(
          "pl-12",
          "size-full",
          "bg-secondary border-transparent",
          "transition-all",
          "focus-visible:ring-primary/50",
          "xs:placeholder:text-sm",
          "xsm:placeholder:text-base",
        )}
      />
    </Form>
  )
}

export default HeaderSearch
