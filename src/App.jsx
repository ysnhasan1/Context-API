// Providers
import { LanguageContextProvider } from "./contexts/LanguageContext"
import { ThemeContextProvider } from './contexts/ThemeContext'

// Components
import Container from "./Container"

// CSS
import "./css/App.css"

const App = () => {
  return (
    <LanguageContextProvider>
      <ThemeContextProvider>
        <Container />
      </ThemeContextProvider>
    </LanguageContextProvider>
  )
}

export default App