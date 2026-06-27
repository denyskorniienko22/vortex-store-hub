import { useCallback, useMemo } from "react"

import { useNavigation, useSearchParams } from "react-router"

import { routes } from "@/root/routes"

import { useProductFiltersUI } from "../provider/product-filters-context"

export const useProductFilters = () => {
  const { isFiltersOpen, handleOpenFilters, handleCloseFilters } =
    useProductFiltersUI()

  const [searchParams, setSearchParams] = useSearchParams()

  const navigation = useNavigation()

  const isFilteringProducts =
    navigation.location?.pathname === routes.CATALOG &&
    navigation.state !== "idle"

  const handleToggleFilter = useCallback(
    (key: string, value: string) => {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams)
        const currentValues = newParams.getAll(key)

        if (currentValues.includes(value)) {
          const filtered = currentValues.filter((val) => val !== value)
          newParams.delete(key)
          filtered.forEach((val) => newParams.append(key, val))
        } else {
          newParams.append(key, value)
        }

        return newParams
      })
    },
    [setSearchParams],
  )

  const handleChangePrice = useCallback(
    (min: string, max: string) => {
      setSearchParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams)

        newParams.set("min_price", min)
        newParams.set("max_price", max)

        return newParams
      })
    },
    [setSearchParams],
  )

  const hasFilters = useMemo(
    () => Array.from(searchParams.keys()).length > 0,
    [searchParams],
  )

  return {
    searchParams,
    hasFilters,
    isFiltersOpen,
    isFilteringProducts,
    setSearchParams,
    handleToggleFilter,
    handleChangePrice,
    handleOpenFilters,
    handleCloseFilters,
  }
}
