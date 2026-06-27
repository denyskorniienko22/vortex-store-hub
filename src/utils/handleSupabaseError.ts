import { redirect } from "react-router";

import type { AuthError, PostgrestError } from "@supabase/supabase-js";

import type { ActionResponseType } from "@/types/ActionResponse";

export const handleSupabaseActionError = (
  error: PostgrestError | AuthError | null,
  redirectTo?: string,
  errorMessage?: string,
): ActionResponseType | Response => {
  if (error)
    return {
      success: false,
      errorMessage: errorMessage || error.message,
    };

  if (redirectTo) return redirect(redirectTo);

  return { success: true };
};
