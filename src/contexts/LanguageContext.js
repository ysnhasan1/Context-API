import { createContext, useState, useEffect, useContext } from "react"

const LanguageContext = createContext()

export const LanguageContextProvider = ({ children }) => {

    const defaultLanguage = localStorage.getItem("language") || "tr"

    const [language, setLanguage] = useState(defaultLanguage)

    const toggleLanguage = () => {
        setLanguage(prev => prev === "tr" ? "en" : "tr")
    }

    const values = { language, toggleLanguage }

    useEffect(() => {
        localStorage.setItem("language", language)
    }, [language])

    return (
        <LanguageContext.Provider value={values}>
            {children}
        </LanguageContext.Provider>
    )
}

// Custom Hook
export const useLang = () => {
    return useContext(LanguageContext)
}

export default LanguageContext