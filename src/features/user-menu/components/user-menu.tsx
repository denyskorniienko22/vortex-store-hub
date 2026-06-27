import { DashboardSquare01Icon, FavouriteIcon } from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";

import type { UserProfileType } from "@/types/UserData";

import { cn } from "@/lib/utils";
import { routes } from "@/root/routes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

import { UserAvatar, UserMenuHeader, UserMenuItem, UserMenuLogout } from "./ui";

interface IUserMenuProps {
  profileData: UserProfileType | undefined;
  countFavoriteProducts: number | undefined | null;
  countUserOrders: number | undefined | null;
}

const UserMenu = ({
  profileData,
  countFavoriteProducts,
  countUserOrders,
}: IUserMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "relative",
            "size-10 rounded-full",
            "border-2 border-transparent",
            "p-0",
            "overflow-hidden cursor-pointer",
            "transition-all",
            "hover:border-primary/50",
          )}
        >
          <UserAvatar src="https://github.com/shadcn.png" alt={profileData?.user_name} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn("w-56 rounded-xl", "mt-2")}
        align="end"
        forceMount
      >
        <UserMenuHeader email={profileData?.email} user_name={profileData?.user_name} />
        <DropdownMenuSeparator />
        <UserMenuItem
          icon={DashboardSquare01Icon}
          label="My orders"
          linkTo={routes.USER_ORDERS}
          count={countUserOrders}
        />
        <UserMenuItem
          icon={FavouriteIcon}
          label="Favorites"
          linkTo={routes.FAVORITE_PRODUCTS}
          count={countFavoriteProducts}
        />
        <DropdownMenuSeparator />
        <UserMenuLogout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
