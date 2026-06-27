import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

interface IFilterResetButtonProps {
  isFilteringProducts: boolean;
  onClearParams: () => void;
}

const FilterResetButton = ({
  isFilteringProducts,
  onClearParams,
}: IFilterResetButtonProps) => {
  return (
    <Button
      className={cn("w-full", "text-xs", "cursor-pointer", "px-4")}
      disabled={isFilteringProducts}
      onClick={onClearParams}
    >
      {isFilteringProducts ? <Spinner /> : "Reset all"}
    </Button>
  );
};

export default FilterResetButton;
