import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IAuthFormContainer {
  children: ReactNode;
}

const AuthFormContainer = ({ children }: IAuthFormContainer) => {
  return <div className={cn("grid gap-4", "max-w-md w-full")}>{children}</div>;
};

export default AuthFormContainer;
