import type { ReactNode } from "react";

import { Form, Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";

import type { AuthRoutesType } from "@/root/routes";
import type { AuthIntentsType } from "../../auth.constants";

interface IAuthFormProps {
  children: ReactNode;
  action: string;
  intent: AuthIntentsType;
  submitText: string;
  footerText: string;
  footerLinkText: string;
  footerLinkTo: AuthRoutesType;
  isSubmitting: boolean;
  isValid: boolean;
}

const AuthForm = ({
  action,
  intent,
  children,
  submitText,
  footerLinkText,
  footerLinkTo,
  footerText,
  isSubmitting,
  isValid,
}: IAuthFormProps) => {
  return (
    <Form method="post" action={action} className="flex flex-col gap-6">
      <input type="hidden" name="intent" value={intent} />
      {children}
      <Field>
        <Button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? <Spinner /> : submitText}
        </Button>
      </Field>
      <FieldDescription className="text-center">
        {footerText} <Link to={footerLinkTo}>{footerLinkText}</Link>
      </FieldDescription>
    </Form>
  );
};

export default AuthForm;
