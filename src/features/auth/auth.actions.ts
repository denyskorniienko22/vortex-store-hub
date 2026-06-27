import { type ActionFunctionArgs } from "react-router";

import type { ActionResponseType } from "@/types/ActionResponse";

import { loginAction, logoutAction, registerAction } from "./auth.api";

export const authActions = async ({
  request,
}: ActionFunctionArgs): Promise<ActionResponseType | Response> => {
  const formData = await request.formData();

  const intent = formData.get("intent");

  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  switch (intent) {
    case "login":
      return loginAction(email, password);

    case "register":
      return registerAction(email, password, username);

    case "logout":
      return logoutAction();

    default:
      return { success: false, errorMessage: "Unknown auth intent" };
  }
};
