import { Activity } from "react"

import { Link, useLocation, useNavigation } from "react-router"

import { ArrowLeft01Icon, Menu01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { useProductFilters } from "@/features/sidebar/hooks/use-product-filters"
import { cn } from "@/lib/utils"
import { routes } from "@/root/routes"

import HeaderActions from "./header-actions"
import HeaderLogo from "./header-logo"
import HeaderSearch from "./header-search"

const Header = () => {
  const { handleOpenFilters } = useProductFilters()

  const navigation = useNavigation()

  const location = useLocation()
  const isCatalogPage = location.pathname === routes.CATALOG

  const isRedirectingToCatalog =
    navigation.location?.pathname === routes.CATALOG &&
    navigation.state === "loading"

  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "w-full",
        "border-b bg-background/95 backdrop-blur",
        "supports-backdrop-filter:bg-background/60",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-4",
          "h-16",
          "px-4",
          "xs:mx-0 xs:max-w-full",
          "lg:mx-auto lg:container",
        )}
      >
        <Activity mode={isCatalogPage ? "hidden" : "visible"}>
          <Link
            to={routes.CATALOG}
            className={cn("hidden", "xs:block", "sm:hidden")}
          >
            <Button size="icon" variant="ghost">
              {isRedirectingToCatalog ? (
                <Spinner className="size-5" />
              ) : (
                <HugeiconsIcon icon={ArrowLeft01Icon} className="size-5" />
              )}
            </Button>
          </Link>
        </Activity>

        <Activity mode={isCatalogPage ? "visible" : "hidden"}>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={handleOpenFilters}
          >
            <HugeiconsIcon icon={Menu01Icon} className="size-5" />
          </Button>
        </Activity>

        <HeaderLogo />
        <HeaderSearch />
        <HeaderActions />
      </div>
    </header>
  )
}

export default Header
