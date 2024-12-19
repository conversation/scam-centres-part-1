import { createContext } from 'react'

interface DarkModeContextType {
  isDarkMode: boolean
  toggleDarkMode: (data: boolean) => void
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)
