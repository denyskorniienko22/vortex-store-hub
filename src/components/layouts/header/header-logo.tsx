import { Link } from "react-router";

import { cn } from "@/lib/utils";
import { routes } from "@/root/routes";

const HeaderLogo = () => {
  return (
    <div className={cn("flex items-center gap-4", "xs:hidden", "sm:block")}>
      <Link to={routes.CATALOG} className={cn("flex items-center gap-2")}>
        <div
          className={cn(
            "flex items-center justify-center shrink-0",
            "size-10 rounded-xl",
            "bg-primary shadow-[0_0_15px_0_rgba(146,39,143,0.3)]",
            "text-primary-foreground",
            "transition-transform",
          )}
        >
          <span className="text-xl font-black">V</span>
        </div>
        <span className={cn("block", "text-xl font-bold tracking-tight")}>
          VORTEX <span className="text-primary">HUB</span>
        </span>
      </Link>
    </div>
  );
};

export default HeaderLogo;
