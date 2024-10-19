import { createContext, useState, useEffect, useContext } from "react"

const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {

    const defaultTheme = localStorage.getItem("theme") || "light"

    const [theme, setTheme] = useState(defaultTheme)

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    const values = { theme, toggleTheme }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

// Custom Hook
export const useTheme = () => {
    return useContext(ThemeContext)
}

export default ThemeContext