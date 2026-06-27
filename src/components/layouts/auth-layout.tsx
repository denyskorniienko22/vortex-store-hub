import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IAuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        "min-h-screen",
        "bg-muted",
        "px-2",
      )}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
