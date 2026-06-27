import type { User } from "@supabase/supabase-js"

export type UserProfileType = {
  user_name: string
  email: string
}

export type UserDataType = {
  user: User | undefined
  profile: UserProfileType
  favoritesCount: number | undefined | null
  countOrderProducts: number | undefined | null
  countUserOrders: number | undefined | null
}
