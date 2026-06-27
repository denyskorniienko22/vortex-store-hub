import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { routes } from "@/root/routes";

interface IProductLearnMoreProps {
  id: string;
  slug: string;
}

const ProductLearnMore = ({ id, slug }: IProductLearnMoreProps) => {
  return (
    <Link to={`${routes.CATALOG}/${id}=${slug}`}>
      <Button
        variant="secondary"
        className={cn(
          "w-full",
          "bg-secondary/40",
          "text-muted-foreground font-bold",
          "transition-all duration-200",
          "cursor-pointer",
          "hover:bg-secondary hover:text-primary hover:scale-[1.02]",
          "active:scale-[0.98]",
        )}
      >
        Learn more...
      </Button>
    </Link>
  );
};

export default ProductLearnMore;
