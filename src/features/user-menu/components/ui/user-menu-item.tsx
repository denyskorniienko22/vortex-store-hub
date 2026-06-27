import { Activity } from "react";

import { Link } from "react-router";

import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface IUserMenuItemProps {
  linkTo: string;
  icon: IconSvgElement;
  label: string;
  count?: number | null;
}

const UserMenuItem = ({ linkTo, icon, label, count }: IUserMenuItemProps) => {
  return (
    <DropdownMenuItem className={cn("gap-2", "cursor-pointer", "py-2.5")}>
      <Link
        to={linkTo}
        className={cn("flex items-center justify-between", "w-full")}
      >
        <div className="flex items-center gap-x-2">
          <HugeiconsIcon
            icon={icon}
            size={18}
            className="text-muted-foreground"
          />
          <span>{label}</span>
        </div>
        <Activity
          mode={count !== undefined || count !== null ? "visible" : "hidden"}
        >
          <p>{count}</p>
        </Activity>
      </Link>
    </DropdownMenuItem>
  );
};

export default UserMenuItem;
