import {
  LockPasswordIcon,
  Mail01Icon,
  ViewIcon,
  ViewOffIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

import { cn } from "@/lib/utils";
import { routes } from "@/root/routes";

import { type LoginFormValues, loginSchema } from "../auth.schema";
import { AUTH_INTENTS } from "../auth.constants";
import { useAuthForm } from "../hooks/use-auth-form";

import { AuthForm, AuthFormContainer, AuthFormField, AuthFormHeader } from "./ui";

const LoginForm = () => {
  const {
    register,
    isSubmitting: isLoggining,
    isPasswordVisible,
    handleChangePasswordVisibility,
    formState: { errors, isValid },
  } = useAuthForm<LoginFormValues>({
    intent: AUTH_INTENTS.LOGIN,
    schema: loginSchema,
  });

  return (
    <AuthFormContainer>
      <AuthFormHeader title="Welcome back" description="Login to your account" />
      <AuthForm
        action={routes.LOGIN}
        intent={AUTH_INTENTS.LOGIN}
        isSubmitting={isLoggining}
        isValid={isValid}
        submitText="Sign in"
        footerLinkText="Sign up"
        footerText="Don't have an account?"
        footerLinkTo={routes.REGISTER}
      >
        <AuthFormField
          id="email"
          labelIcon={Mail01Icon}
          errors={errors}
          labelText="Email"
        >
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            {...register("email")}
          />
        </AuthFormField>

        <AuthFormField
          id="password"
          labelIcon={LockPasswordIcon}
          errors={errors}
          labelText="Password"
        >
          <InputGroup>
            <InputGroupInput
              id="password"
              placeholder="Enter your password"
              type={isPasswordVisible ? "text" : "password"}
              required
              {...register("password")}
            />
            <InputGroupButton
              size="icon-xs"
              onClick={handleChangePasswordVisibility}
              className={cn("mr-3", "cursor-pointer")}
            >
              {isPasswordVisible ? (
                <HugeiconsIcon icon={ViewIcon} />
              ) : (
                <HugeiconsIcon icon={ViewOffIcon} />
              )}
            </InputGroupButton>
          </InputGroup>
        </AuthFormField>
      </AuthForm>
    </AuthFormContainer>
  );
};

export default LoginForm;
