import { Link, useNavigation } from "react-router";

import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import { type RoutesType, routes } from "@/root/routes";

import { Button } from "./button";
import { Spinner } from "./spinner";

interface IShowMessageProps {
  title: string;
  description: string;
  icon: IconSvgElement;
  btnText?: string;
  linkTo?: RoutesType;
}

const ShowMessage = ({
  title,
  description,
  icon,
  btnText,
  linkTo = routes.CATALOG,
}: IShowMessageProps) => {
  const navigation = useNavigation();

  const isRedirecting =
    navigation.location?.pathname === linkTo && navigation.state !== "idle";

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        "text-center",
      )}
    >
      <HugeiconsIcon
        icon={icon}
        className={cn("size-12", "text-muted-foreground", "mb-4 opacity-20")}
      />
      <div className={cn("flex flex-col gap-3", "mb-6")}>
        <h2
          className={cn("text-2xl font-semibold", "xs:text-lg", "xsm:text-2xl")}
        >
          {title}
        </h2>
        <p
          className={cn(
            "text-lg",
            "xs:text-base",
            "xsm:text-lg xsm:max-w-96 xsm:mx-auto",
          )}
        >
          {description}
        </p>
      </div>
      {btnText && (
        <Link
          to={linkTo}
          className={cn(isRedirecting && "pointer-events-none")}
        >
          <Button
            className={cn("w-52 h-10", "px-12", "cursor-pointer")}
            disabled={isRedirecting}
          >
            {isRedirecting ? <Spinner /> : btnText}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ShowMessage;
