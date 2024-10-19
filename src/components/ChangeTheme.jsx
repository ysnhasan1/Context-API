import { useTheme } from "../contexts/ThemeContext"

const ChangeTheme = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <>
            <h1>Theme: {theme}</h1>
            <button onClick={toggleTheme}>Change Theme</button>
        </>
    )
}

export default ChangeTheme