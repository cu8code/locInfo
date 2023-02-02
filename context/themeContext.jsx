import { createContext, useContext, useState } from "react";

const theme = createContext(null)

export default function ThemeContext({ children }) {
  const themeState = useState("light")
  return <theme.Provider value={themeState}>
    {children}
  </theme.Provider>
}

export function useThemeContext() {
  return useContext(theme)
}
