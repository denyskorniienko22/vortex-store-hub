import { Link, useNavigation } from "react-router";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { routes } from "@/root/routes";

const CartCheckoutButton = () => {
  const navigation = useNavigation();

  const isRedirectingToCheckout =
    navigation.location?.pathname === routes.CHECKOUT &&
    navigation.state === "loading";

  return (
    <Link
      to={routes.CHECKOUT}
      className={cn(
        "h-12 w-60",
        "xs:w-full",
        "md:w-60",
        isRedirectingToCheckout && "pointer-events-none",
      )}
    >
      <Button
        className={cn("size-full", "cursor-pointer")}
        disabled={isRedirectingToCheckout}
      >
        {isRedirectingToCheckout ? <Spinner /> : "Place an order"}
      </Button>
    </Link>
  );
};

export default CartCheckoutButton;
