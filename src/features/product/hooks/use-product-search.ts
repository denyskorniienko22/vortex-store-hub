import type { ChangeEvent } from "react"

import { useNavigation, useSearchParams, useSubmit } from "react-router"

import { useDebouncedCallback } from "use-debounce"

import { routes } from "@/root/routes"

export const useProductSearch = () => {
  const [searchParams] = useSearchParams()

  const submit = useSubmit()
  const navigation = useNavigation()

  const debouncedSubmit = useDebouncedCallback((form: HTMLFormElement) => {
    const formData = new FormData(form)
    const searchTerm = formData.get("search") as string

    const newParams = new URLSearchParams(searchParams)

    if (!searchTerm) newParams.delete("search")
    else newParams.set("search", searchTerm)

    submit(newParams, { method: 'get', replace: true })
  }, 600)

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>
    debouncedSubmit(event.currentTarget.form!)

  const isSearching =
    navigation.formAction === routes.CATALOG && navigation.state === "loading"

  return {
    defaultValue: searchParams.get("search") || "",
    isSearching,
    onChange: handleSearch,
  }
}
