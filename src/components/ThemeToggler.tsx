import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"

const themes = ["light", "dark"]

export function ThemeToggler() {
  const [mounted, setMounted] = React.useState(false)
  const [theme, setTheme] = React.useState<"light" | "dark">("dark")

  const toggleTheme = () => {
    const t = theme === "dark" ? "light" : "dark"
    localStorage.setItem("theme", t)
    setTheme(t)
  }

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }, [])

  React.useEffect(() => {
    const isDark = theme === "dark"
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  React.useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted ? (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="inline-flex items-center justify-center rounded-3xl bg-foreground bg-orange-300 p-4 transition duration-500 ease-in-out dark:bg-zinc-600"
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  ) : (
    <div className="size-14 animate-pulse rounded-3xl bg-secondary/80" />
  )
}
