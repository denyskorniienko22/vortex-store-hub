import { Activity, type ReactNode } from "react";

import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import type { FieldErrors, FieldPath, FieldValues } from "react-hook-form";

import { Field, FieldLabel } from "@/components/ui/field";

interface IAuthFormFieldProps<TFieldValues extends FieldValues> {
  id: FieldPath<TFieldValues>;
  labelText: string;
  labelIcon: IconSvgElement;
  errors: FieldErrors<TFieldValues>;
  children: ReactNode;
}

const AuthFormField = <TFieldValues extends FieldValues>({
  id,
  labelText,
  labelIcon,
  errors,
  children,
}: IAuthFormFieldProps<TFieldValues>) => {
  return (
    <div className="flex flex-col gap-y-2">
      <Field>
        <FieldLabel className="flex items-center gap-x-2" htmlFor={id}>
          <HugeiconsIcon icon={labelIcon} />
          {labelText}
        </FieldLabel>
        {children}
      </Field>
      <Activity mode={errors[id] ? "visible" : "hidden"}>
        <p className="text-red-600">{errors[id]?.message?.toString()}</p>
      </Activity>
    </div>
  );
};

export default AuthFormField;
