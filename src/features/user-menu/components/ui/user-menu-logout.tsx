import { Form } from "react-router";

import { Logout01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { AUTH_INTENTS } from "@/features/auth/auth.constants";
import { cn } from "@/lib/utils";
import { routes } from "@/root/routes";

const UserMenuLogout = () => {
  return (
    <DropdownMenuItem
      className={cn(
        "gap-2",
        "text-red-500",
        "cursor-pointer",
        "py-2.5",
        "focus:text-rose-500 focus:bg-rose-500/10",
      )}
    >
      <Form action={routes.LOGOUT} method="post" className="size-full">
        <input type="hidden" name="intent" value={AUTH_INTENTS.LOGOUT} />
        <button
          type="submit"
          className={cn(
            "flex items-center gap-x-2",
            "size-full",
            "cursor-pointer",
          )}
        >
          <HugeiconsIcon icon={Logout01Icon} size={18} />
          <span>Log Out</span>
        </button>
      </Form>
    </DropdownMenuItem>
  );
};

export default UserMenuLogout;
