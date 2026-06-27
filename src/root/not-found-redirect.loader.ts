import { redirect } from "react-router"
import { routes } from "./routes"

export const notFoundRedirectLoader = () => redirect(routes.CATALOG)
