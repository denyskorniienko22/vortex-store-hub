import { Activity } from "react";

import { cn } from "@/lib/utils";

import { Spinner } from "./spinner";

interface IListHeaderProps {
  title: string;
  totalAmount: number;
  isSearching?: boolean;
}

const ListHeader = ({ title, totalAmount, isSearching }: IListHeaderProps) => {
  return (
    <section className="flex items-center gap-3">
      <Activity mode={totalAmount > 0 || isSearching ? "visible" : "hidden"}>
        <h1 className="text-2xl font-black tracking-tight uppercase text-foreground">
          {title}
        </h1>
        <span
          className={cn(
            "text-sm font-mono font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded border border-border/40 transition-opacity",
          )}
        >
          {isSearching ? <Spinner /> : `[${totalAmount} units deployed]`}
        </span>
      </Activity>
    </section>
  );
};

export default ListHeader;
