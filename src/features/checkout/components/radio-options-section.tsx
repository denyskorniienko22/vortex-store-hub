import { type Control, Controller } from "react-hook-form";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  Field,
  FieldContent,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

import type { CheckoutFormValues } from "../checkout.schema";
import type { RadioOptionType } from "../constants";

interface IRadioOptionsSedctionProps {
  control: Control<CheckoutFormValues>;
  controller_name: keyof Pick<
    CheckoutFormValues,
    "way_to_deliver" | "way_to_payment"
  >;
  options: RadioOptionType[];
}

const RadioOptionsSection = ({
  control,
  controller_name,
  options,
}: IRadioOptionsSedctionProps) => {
  return (
    <div>
      <h3 className={cn("text-lg font-semibold", "pb-2")}>Delivery</h3>
      <Controller
        control={control}
        name={controller_name}
        render={({ field }) => (
          <RadioGroup value={field.value} onValueChange={field.onChange}>
            {options.map((option) => (
              <FieldLabel
                key={option.id}
                htmlFor={option.id}
                className={cn("border-none", "cursor-pointer")}
              >
                <Field
                  orientation="horizontal"
                  className={cn(
                    "rounded-md",
                    "bg-slate-100/70",
                    field.value === option.value && "bg-slate-200/50",
                  )}
                >
                  <RadioGroupItem value={option.value} id={option.id} />
                  <FieldContent>
                    <FieldTitle>
                      <HugeiconsIcon
                        icon={option.icon}
                        size={18}
                        className={cn(
                          "hidden",
                          field.value === option.value && "block",
                        )}
                      />
                      {option.label}
                    </FieldTitle>
                  </FieldContent>
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
        )}
      />
    </div>
  );
};

export default RadioOptionsSection;
