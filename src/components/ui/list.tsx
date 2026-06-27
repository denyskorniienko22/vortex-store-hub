import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IListProps<TListItem> {
  items: TListItem[] | undefined | null;
  renderItem: (item: TListItem, index: number) => ReactNode;
  className?: string;
  as?: "ul" | "ol" | "div";
}

const List = <TListItem,>({
  items,
  renderItem,
  as: Component = "ul",
  className,
}: IListProps<TListItem>) => {
  if (!items || items.length === 0) return null;

  return (
    <Component className={cn(className)}>
      {items.map((item, index) => {
        const key =
          (item as any).id ||
          (item as any).cartId ||
          (item as any).key ||
          index;

        return <li key={key}>{renderItem(item, index)}</li>;
      })}
    </Component>
  );
};

export default List;
