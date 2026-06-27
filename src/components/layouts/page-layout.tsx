import { type ReactNode } from "react"

import { cn } from "@/lib/utils"

import Header from "./header/header"

interface IPageLayoutProps {
  children: ReactNode
  className?: string
}

const PageLayout = ({ children, className }: IPageLayoutProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        "min-h-screen",
        "bg-background",
        "pb-5",
      )}
    >
      <Header />
      <main
        className={cn(
          "container mx-auto",
          "flex-1",
          "px-6",
          "xs:max-w-full xs:px-3",
          "lg:container lg:mx-auto",
          className,
        )}
      >
        {children}
      </main>
    </div>
  )
}

export default PageLayout
