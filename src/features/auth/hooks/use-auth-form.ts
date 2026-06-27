import { useCallback, useEffect, useState } from "react"

import { useActionData, useNavigation } from "react-router"

import { zodResolver } from "@hookform/resolvers/zod"
import { type FieldValues, type Resolver, useForm } from "react-hook-form"
import { toast } from "sonner"
import type { z } from "zod"

import type { ActionResponseType } from "@/types/ActionResponse"

import type { AuthIntentsType } from "../auth.constants"

interface UseAuthFormProps<T extends FieldValues> {
  intent: AuthIntentsType
  schema: z.ZodType<T, any, any>
}

export const useAuthForm = <T extends FieldValues>({
  intent,
  schema,
}: UseAuthFormProps<T>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  const navigation = useNavigation()
  const actionData = useActionData<ActionResponseType>()

  const isSubmitting =
    navigation.formData?.get("intent") === intent && navigation.state !== "idle"

  const form = useForm<T>({
    mode: "onChange",
    resolver: zodResolver(schema) as unknown as Resolver<T>,
  })

  useEffect(() => {
    if (actionData?.errorMessage) toast.error(actionData?.errorMessage)
  }, [actionData?.errorMessage])

  const handleChangePasswordVisibility = useCallback(
    () => setIsPasswordVisible((prevState) => !prevState),
    [],
  )

  return {
    isSubmitting,
    isPasswordVisible,
    handleChangePasswordVisibility,
    ...form,
  }
}
