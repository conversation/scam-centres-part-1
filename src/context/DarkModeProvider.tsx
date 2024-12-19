import { useState, ReactNode } from 'react'
import { DarkModeContext } from './DarkModeContext'

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // const toggleDarkMode = () => setIsDarkMode((prev) => !prev)
  const toggleDarkMode = (data: boolean) => setIsDarkMode(data)

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>
}
