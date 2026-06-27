import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

interface IProductFiltersContext {
  isFiltersOpen: boolean
  handleOpenFilters: () => void
  handleCloseFilters: () => void
}

const ProductFiltersContext = createContext<IProductFiltersContext | undefined>(
  undefined,
)

export const ProductFiltersProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false)

  const handleOpenFilters = useCallback(() => setIsFiltersOpen(true), [])
  const handleCloseFilters = useCallback(() => setIsFiltersOpen(false), [])

  const value = useMemo(
    () => ({
      isFiltersOpen,
      handleOpenFilters,
      handleCloseFilters,
    }),
    [isFiltersOpen, handleOpenFilters, handleCloseFilters],
  )

  return (
    <ProductFiltersContext.Provider value={value}>
      {children}
    </ProductFiltersContext.Provider>
  )
}

export const useProductFiltersUI = () => {
  const context = useContext(ProductFiltersContext)

  if (!context)
    throw new Error(
      "useProductFiltersUI must be used within a ProductFiltersProvider",
    )

  return context
}
