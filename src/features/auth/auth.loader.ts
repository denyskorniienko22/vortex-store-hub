import { DATABASE_TABLES } from "@/constants/database-tables";
import { supabase } from "@/lib/supabase";
import type { UserDataType } from "@/types/UserData";

export const authLoader = async (): Promise<UserDataType | undefined> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return undefined;

  const { data: profile } = await supabase
    .from(DATABASE_TABLES.PROFILES)
    .select("*")
    .eq("id", user.id)
    .single();

  const { count: favoritesCount } = await supabase
    .from(DATABASE_TABLES.FAVORITES)
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  const { count: countOrderProducts } = await supabase
    .from(DATABASE_TABLES.CART)
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  const { count: countUserOrders } = await supabase
    .from(DATABASE_TABLES.ORDERS)
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  return {
    user,
    profile,
    favoritesCount,
    countOrderProducts,
    countUserOrders,
  };
};
