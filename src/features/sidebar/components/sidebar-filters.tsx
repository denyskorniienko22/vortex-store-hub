import { Activity } from "react"

import { Cancel01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Accordion } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

import { SPECIFICATIONS_FILTER } from "../constants"
import { useProductFilters } from "../hooks/use-product-filters"

import { FilterResetButton, FilterSection, PriceFilter } from "./ui"

const SidebarFilters = () => {
  const {
    searchParams,
    hasFilters,
    isFiltersOpen,
    isFilteringProducts,
    handleChangePrice,
    handleToggleFilter,
    setSearchParams,
    handleCloseFilters,
  } = useProductFilters()

  return (
    <aside
      className={cn(
        "sticky top-20",
        "flex flex-col shrink-0",
        "w-72 rounded-xl",
        "border bg-card",
        "xs:w-full xs:fixed xs:inset-0 xs:z-50 xs:rounded-none",
        "xsm:w-72",
        "lg:block lg:sticky lg:top-20 lg:rounded-xl lg:z-0",
        !isFiltersOpen && "hidden",
      )}
    >
      <div
        className={cn(
          "relative",
          "flex justify-between gap-4 shrink-0",
          "h-14",
        )}
      >
        <h3 className={cn("text-lg font-black tracking-tight", "pt-3 p-4")}>
          FILTERS
        </h3>
        <Button
          size="icon"
          className={cn("absolute right-2 top-2", "lg:hidden")}
          onClick={handleCloseFilters}
        >
          <HugeiconsIcon icon={Cancel01Icon} />
        </Button>
      </div>

      <ScrollArea>
        <div className="max-h-[calc(100vh-155px)] xs:max-h-[calc(100vh-50px)] lg:max-h-[calc(100vh-155px)]">
          <Accordion
            type="multiple"
            className={cn("rounded-none", "border-none")}
          >
            {SPECIFICATIONS_FILTER.map((filter) => (
              <FilterSection
                key={filter.id}
                filter={filter}
                searchParams={searchParams}
                onFilterChange={handleToggleFilter}
              />
            ))}
            <PriceFilter
              searchParams={searchParams}
              hasFilters={hasFilters}
              onPriceChange={handleChangePrice}
            />
          </Accordion>

          <Activity mode={hasFilters ? "visible" : "hidden"}>
            <div className="p-4">
              <FilterResetButton
                isFilteringProducts={isFilteringProducts}
                onClearParams={() => setSearchParams({})}
              />
            </div>
          </Activity>
        </div>
      </ScrollArea>
    </aside>
  )
}

export default SidebarFilters
