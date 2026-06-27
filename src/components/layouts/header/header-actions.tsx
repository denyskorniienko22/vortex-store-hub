import { Link, useRouteLoaderData } from "react-router";

import { UserCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import CartButton from "@/features/cart/components/ui/cart-button";
import UserMenu from "@/features/user-menu/components/user-menu";
import { cn } from "@/lib/utils";
import { routes } from "@/root/routes";
import type { UserDataType } from "@/types/UserData";

const HeaderActions = () => {
  const data = useRouteLoaderData("root") as UserDataType;

  const userData = {
    user: data?.user,
    profile: data?.profile,
    countFavoriteProducts: data?.favoritesCount,
    countOrderProducts: data?.countOrderProducts,
    countUserOrders: data?.countUserOrders,
  };

  const {
    user,
    profile,
    countFavoriteProducts,
    countOrderProducts,
    countUserOrders,
  } = userData;

  return (
    <div className="flex items-center gap-2">
      {user ? (
        <>
          <CartButton countOrderProducts={countOrderProducts} />
          <UserMenu
            profileData={profile}
            countFavoriteProducts={countFavoriteProducts}
            countUserOrders={countUserOrders}
          />
        </>
      ) : (
        <Link to={routes.LOGIN}>
          <Button
            size="lg"
            className={cn(
              "py-0 px-5",
              "rounded-xl w-full",
              "overflow-hidden cursor-pointer",
            )}
          >
            <HugeiconsIcon icon={UserCircleIcon} size={24} /> Sign in
          </Button>
        </Link>
      )}
    </div>
  );
};

export default HeaderActions;
