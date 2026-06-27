import { Link } from "react-router";

import { ShoppingBasket01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { routes } from "@/root/routes";

const CartButton = ({
  countOrderProducts,
}: {
  countOrderProducts: number | undefined | null;
}) => {
  return (
    <Link to={routes.CART}>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "relative",
          "mr-2",
          "text-muted-foreground",
          "cursor-pointer",
          "hover:text-primary",
        )}
      >
        <HugeiconsIcon icon={ShoppingBasket01Icon} className="size-5" />
        <span
          className={cn(
            "absolute -top-1 -right-1",
            "flex items-center justify-center",
            "size-4 rounded-full",
            "bg-primary",
            "text-[10px] font-bold text-white",
          )}
        >
          {countOrderProducts}
        </span>
      </Button>
    </Link>
  );
};

export default CartButton;
