import { DATABASE_TABLES } from "@/constants/database-tables";
import { supabase } from "@/lib/supabase";
import type { ActionResponseType } from "@/types/ActionResponse";
import { handleSupabaseActionError } from "@/utils/handleSupabaseError";

export const deleteFromCartAction = async (
  user_id: string | undefined,
  cart_id: string,
): Promise<ActionResponseType | Response> => {
  const { error } = await supabase
    .from(DATABASE_TABLES.CART)
    .delete()
    .eq("id", cart_id)
    .eq("user_id", user_id);

  return handleSupabaseActionError(error);
};

export const updateQuantityAction = async (
  user_id: string | undefined,
  cart_id: string,
  newQuantity: number,
): Promise<ActionResponseType | Response> => {
  if (newQuantity < 1) return deleteFromCartAction(user_id, cart_id);

  const { error } = await supabase
    .from(DATABASE_TABLES.CART)
    .update({ quantity: newQuantity })
    .eq("id", cart_id)
    .eq("user_id", user_id);

  return handleSupabaseActionError(error);
};
