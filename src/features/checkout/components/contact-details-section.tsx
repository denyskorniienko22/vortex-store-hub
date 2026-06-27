import { Activity } from "react";

import type { FieldErrors, UseFormRegister } from "react-hook-form";

import { TelephoneIcon, UserAccountIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import type { CheckoutFormValues } from "../checkout.schema";

interface IContactDetailsSectionProps {
  register: UseFormRegister<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
}

const ContactDetailsSection = ({
  register,
  errors,
}: IContactDetailsSectionProps) => {
  return (
    <div>
      <h3 className={cn("text-lg font-semibold", "pb-2")}>Contact details</h3>
      <div
        className={cn(
          "flex flex-col gap-4",
          "rounded-md",
          "bg-slate-100/70",
          "px-6 py-10",
        )}
      >
        <Field>
          <FieldLabel htmlFor="user_tel" className={cn("text-base", "mb-0.5")}>
            <HugeiconsIcon icon={TelephoneIcon} size={18} />
            Phone
          </FieldLabel>
          <Input
            id="user_tel"
            type="tel"
            className="bg-slate-200/50 border-slate-300/50"
            placeholder="+1234567890"
            required
            {...register("phone")}
          />
          <Activity mode={errors.phone?.message ? "visible" : "hidden"}>
            <p className="text-red-600">{errors.phone?.message?.toString()}</p>
          </Activity>
        </Field>
        <Field>
          <FieldLabel
            htmlFor="user_surname"
            className={cn("text-base", "mb-0.5")}
          >
            <HugeiconsIcon icon={UserAccountIcon} size={18} />
            Surname
          </FieldLabel>
          <Input
            id="user_surname"
            type="text"
            className="bg-slate-200/50 border-slate-300/50"
            placeholder="Enter surname..."
            required
            {...register("surname")}
          />
          <Activity mode={errors.surname?.message ? "visible" : "hidden"}>
            <p className="text-red-600">
              {errors.surname?.message?.toString()}
            </p>
          </Activity>
        </Field>
        <Field>
          <FieldLabel htmlFor="user_name" className={cn("text-base", "mb-0.5")}>
            <HugeiconsIcon icon={UserAccountIcon} size={18} />
            Name
          </FieldLabel>
          <Input
            id="user_name"
            type="text"
            className="bg-slate-200/50 border-slate-300/50"
            placeholder="Enter name..."
            required
            {...register("name")}
          />
          <Activity mode={errors.name?.message ? "visible" : "hidden"}>
            <p className="text-red-600">{errors.name?.message?.toString()}</p>
          </Activity>
        </Field>
      </div>
    </div>
  );
};

export default ContactDetailsSection;
