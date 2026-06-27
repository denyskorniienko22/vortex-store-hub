import { Link, useNavigation } from "react-router";

import { ArrowLeftDoubleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { routes } from "@/root/routes";

const CheckoutHeader = () => {
  const navigation = useNavigation();

  const isRedirectingToCatalog =
    navigation.location?.pathname === routes.CATALOG &&
    navigation.state === "loading";

  return (
    <header
      className={cn("flex items-center justify-center", "h-10", "px-4 mb-5")}
    >
      {isRedirectingToCatalog ? (
        <div className={cn("h-full", "p-2")}>
          <Spinner className="size-6" />
        </div>
      ) : (
        <Link to={routes.CATALOG}>
          <Button
            className={cn("bg-transparent", "cursor-pointer", "p-5")}
            size="icon"
          >
            <HugeiconsIcon
              icon={ArrowLeftDoubleIcon}
              color="gray"
              strokeWidth={1.5}
              className="size-7"
            />
          </Button>
        </Link>
      )}
      <h2 className={cn("text-2xl font-bold text-center", "mx-auto")}>
        Placing an order
      </h2>
    </header>
  );
};

export default CheckoutHeader;
