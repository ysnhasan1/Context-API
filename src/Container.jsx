import { useTheme } from "./contexts/ThemeContext"

// Components
import ChangeLanguage from "./components/ChangeLanguage"
import ChangeTheme from "./components/ChangeTheme"
import Footer from "./components/Footer"

const Container = () => {
    const { theme } = useTheme()

    return (
        <div className={`container ${theme}`}>
            <ChangeLanguage />
            <ChangeTheme />
            <Footer />
        </div>
    )
}

export default Container