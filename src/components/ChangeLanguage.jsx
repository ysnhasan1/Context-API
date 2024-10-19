import { useLang } from "../contexts/LanguageContext"

const ChangeLanguage = () => {
    const { language, toggleLanguage } = useLang()

    return (
        <>
            <h1>Language: {language}</h1>
            <button onClick={toggleLanguage}>Change Language</button>
        </>
    )
}

export default ChangeLanguage