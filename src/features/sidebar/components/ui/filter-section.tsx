import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

import type { SPECIFICATIONS_FILTER } from "../../constants";

import FilterCheckbox from "./filter-checkbox";

interface IFilterSectionProps {
  filter: (typeof SPECIFICATIONS_FILTER)[0];
  searchParams: URLSearchParams;
  onFilterChange: (key: string, value: string) => void;
}

const FilterSection = ({
  filter,
  searchParams,
  onFilterChange,
}: IFilterSectionProps) => {
  const activeValues = searchParams.getAll(filter.id);

  return (
    <AccordionItem
      value={filter.id}
      className={cn("border-b", "first:border-t")}
    >
      <AccordionTrigger
        className={cn(
          "text-sm font-semibold cursor-pointer",
          "py-3",
          "rounded-none",
        )}
      >
        {filter.label}
      </AccordionTrigger>
      <AccordionContent className={cn("space-y-3", "pb-4")}>
        {filter.options.map((option) => (
          <FilterCheckbox
            key={option}
            id={`${filter.id}-${option}`}
            label={option}
            suffix={filter.suffix}
            checked={activeValues.includes(option)}
            onToggle={() => onFilterChange(filter.id, option)}
          />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FilterSection;
