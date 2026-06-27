import { useEffect, useState } from "react";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface IPriceFilterProps {
  searchParams: URLSearchParams;
  hasFilters: boolean;
  onPriceChange: (min: string, max: string) => void;
}

const PriceFilter = ({
  searchParams,
  hasFilters,
  onPriceChange,
}: IPriceFilterProps) => {
  const minPrice = Number(searchParams.get("min_price")) || 0;
  const maxPrice = Number(searchParams.get("max_price")) || 160000;

  const [localValues, setLocalValues] = useState([minPrice, maxPrice]);

  useEffect(() => {
    setLocalValues([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  return (
    <AccordionItem value="price" className={cn(hasFilters && "border-b")}>
      <AccordionTrigger
        className={cn(
          "font-semibold",
          "py-3 cursor-pointer",
          "hover:no-underline",
        )}
      >
        Price Range
      </AccordionTrigger>
      <AccordionContent className="py-4">
        <Slider
          className={cn("my-4", "cursor-pointer")}
          min={0}
          max={160000}
          step={50}
          value={localValues}
          onValueChange={setLocalValues}
          onValueCommit={(values) =>
            onPriceChange(values[0].toString(), values[1].toString())
          }
        />

        <div className="grid grid-cols-5 items-center">
          <div className="space-y-1.5 col-span-2">
            <Label htmlFor="min" className="text-xs text-muted-foreground">
              Min
            </Label>
            <Input
              id="min"
              type="number"
              value={localValues[0]}
              className="pl-3"
              readOnly
            />
          </div>

          <figure
            className={cn(
              "text-muted-foreground",
              "mt-6 col-span-1 text-center",
            )}
          >
            —
          </figure>

          <div className={cn("w-full", "space-y-1.5 col-span-2")}>
            <Label htmlFor="max" className="text-xs text-muted-foreground">
              Max
            </Label>
            <Input
              id="max"
              type="number"
              value={localValues[1]}
              className="pl-3"
              readOnly
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default PriceFilter;
