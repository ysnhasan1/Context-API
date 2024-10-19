import { useLang } from "../contexts/LanguageContext"
import { useTheme } from "../contexts/ThemeContext"

const Footer = () => {
    const { language } = useLang()
    const { theme } = useTheme()

    return (
        <>
            <hr />
            <h2>Footer</h2>
            <div>Language: {language} - Theme: {theme}</div>
            <hr />
        </>
    )
}

export default Footer