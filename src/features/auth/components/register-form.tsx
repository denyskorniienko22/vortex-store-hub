import {
  LockPasswordIcon,
  Mail01Icon,
  UserIcon,
  ViewIcon,
  ViewOffIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

import { cn } from "@/lib/utils"
import { routes } from "@/root/routes"

import { type RegisterFormValues, registerSchema } from "../auth.schema"
import { AUTH_INTENTS } from "../auth.constants"
import { useAuthForm } from "../hooks/use-auth-form"

import {
  AuthForm,
  AuthFormContainer,
  AuthFormField,
  AuthFormHeader,
} from "./ui"

const RegisterForm = () => {
  const {
    register,
    isSubmitting: isRegistration,
    isPasswordVisible,
    handleChangePasswordVisibility,
    formState: { errors, isValid },
  } = useAuthForm<RegisterFormValues>({
    intent: AUTH_INTENTS.REGISTER,
    schema: registerSchema,
  })

  return (
    <AuthFormContainer>
      <AuthFormHeader
        title="Sign up"
        description="Create your account to make orders the powerful PC"
      />
      <AuthForm
        action={routes.REGISTER}
        intent={AUTH_INTENTS.REGISTER}
        isSubmitting={isRegistration}
        isValid={isValid}
        submitText="Sign up"
        footerLinkText="Sign in"
        footerText="Already have an account?"
        footerLinkTo={routes.LOGIN}
      >
        {/** USERNAME */}
        <AuthFormField
          id="username"
          labelIcon={UserIcon}
          errors={errors}
          labelText="Username"
        >
          <Input
            id="username"
            placeholder="e.g. vortex_rider"
            required
            {...register("username")}
          />
        </AuthFormField>

        {/** EMAIL */}
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

        {/** PASSWORD */}
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

        {/** EMAIL */}
        <AuthFormField
          id="confirmPassword"
          labelIcon={LockPasswordIcon}
          errors={errors}
          labelText="Confirm password"
        >
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm password"
            required
            {...register("confirmPassword")}
          />
        </AuthFormField>
      </AuthForm>
    </AuthFormContainer>
  )
}

export default RegisterForm
