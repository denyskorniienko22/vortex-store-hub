import type { ActionFunctionArgs } from "react-router";

import { supabase } from "@/lib/supabase";
import type { ActionResponseType } from "@/types/ActionResponse";

import { deleteFromCartAction, updateQuantityAction } from "./cart.api";
import { CART_INTENTS } from "./cart.constants";

export const cartActions = async ({
  request,
}: ActionFunctionArgs): Promise<ActionResponseType | Response> => {
  const formData = await request.formData();

  const intent = formData.get("intent");

  const cartId = formData.get("cart_id") as string;
  const newQuantity = Number(formData.get("quantity"));

  const {
    data: { user },
  } = await supabase.auth.getUser();

  switch (intent) {
    case CART_INTENTS.DELETE_FROM_CART:
      return deleteFromCartAction(user?.id, cartId);

    case CART_INTENTS.UPDATE_QUANTITY:
      return updateQuantityAction(user?.id, cartId, newQuantity);

    default:
      return { success: false, errorMessage: "Unknown cart intent" };
  }
};
