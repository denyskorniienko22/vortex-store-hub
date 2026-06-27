import { supabase } from "@/lib/supabase"
import { routes } from "@/root/routes"
import type { ActionResponseType } from "@/types/ActionResponse"
import { handleSupabaseActionError } from "@/utils/handleSupabaseError"

export const logoutAction = async (): Promise<
  ActionResponseType | Response
> => {
  const { error } = await supabase.auth.signOut()

  return handleSupabaseActionError(
    error,
    routes.CATALOG,
    "Failed to log out from account",
  )
}

export const loginAction = async (
  email: string,
  password: string,
): Promise<ActionResponseType | Response> => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return handleSupabaseActionError(
    error,
    routes.CATALOG,
    "Failed to log in to your account",
  )
}

export const registerAction = async (
  email: string,
  password: string,
  username: string,
): Promise<ActionResponseType | Response> => {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  })

  return handleSupabaseActionError(
    error,
    routes.CATALOG,
    "Failed to create your account",
  )
}
