export const AUTH_INTENTS = {
  LOGIN: "login",
  REGISTER: "register",
  LOGOUT: "logout",
} as const;

export type AuthIntentsType = typeof AUTH_INTENTS[keyof typeof AUTH_INTENTS];
