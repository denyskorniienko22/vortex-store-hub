import { DATABASE_TABLES } from "@/constants/database-tables";
import { supabase } from "@/lib/supabase";
import type { ActionResponseType } from "@/types/ActionResponse";
import { handleSupabaseActionError } from "@/utils/handleSupabaseError";

export const toggleFavoriteAction = async (
  user_id: string | undefined,
  productId: string,
  is_favorite: boolean,
): Promise<ActionResponseType | Response> => {
  if (is_favorite) {
    const { error } = await supabase
      .from(DATABASE_TABLES.FAVORITES)
      .delete()
      .eq("user_id", user_id)
      .eq("product_id", productId);

    return handleSupabaseActionError(
      error,
      "",
      "Failed to change to unfavorite product",
    );
  }

  const { error } = await supabase
    .from(DATABASE_TABLES.FAVORITES)
    .insert({ user_id: user_id, product_id: productId });

  return handleSupabaseActionError(
    error,
    "",
    "Failed to change to favorite product",
  );
};

export const addToCartAction = async (
  user_id: string | undefined,
  productId: string,
): Promise<ActionResponseType | Response> => {
  const { data: existingItem, error: addingToCartError } = await supabase
    .from(DATABASE_TABLES.CART)
    .select("id, quantity")
    .eq("user_id", user_id)
    .eq("product_id", productId)
    .maybeSingle();

  if (addingToCartError) {
    return {
      success: false,
      errorMessage: addingToCartError.message,
    };
  }

  if (existingItem) {
    const { error } = await supabase
      .from(DATABASE_TABLES.CART)
      .update({ quantity: existingItem.quantity + 1 })
      .eq("id", existingItem.id);

    return handleSupabaseActionError(error, "", "Failed to change quantity");
  }

  const { error } = await supabase
    .from(DATABASE_TABLES.CART)
    .insert({ user_id, product_id: productId, quantity: 1 });

  return handleSupabaseActionError(
    error,
    "",
    "Failed to add product to the cart",
  );
};
