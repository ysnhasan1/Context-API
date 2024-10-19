# State Management with Context API
Context API is React's solution for managing global state. It allows you to share data throughout the component tree without having to pass props through multiple levels (avoiding "prop drilling"). <br><br>

## Features
- Global State Management: Manages data that needs to be accessible across different parts of the application.
- Solves Prop Drilling: You can pass data directly to components without sending it through intermediate ones. <br><br>

## Avoiding to Prop Drilling
<img src="https://github.com/user-attachments/assets/a3dad527-fb2a-4b75-b796-c3c008b2acbc"> <br><br>

## How to Use Context API
- Create a folder named `contexts` under the src directory and create a file called `ThemeContext.js` inside it.

<img src="https://github.com/user-attachments/assets/d2bdcd77-99db-4b24-aad9-6cef32210938"> <br><br>

- Then create a context using `createContext` and export it.
```bash 
import { createContext } from "react"

const ThemeContext = createContext()

export default ThemeContext
```
<br>

- Copy the following code snippet and paste it into your `App.jsx` file.
```bash 
const App = () => {
  return (
    <div>
      App
    </div>
  )
}

export default App
```
<br>

- Import the context you created into the `App` component.
```bash 
import ThemeContext from './contexts/ThemeContext'
```
<br>

- Wrap with Provider and then use the Provider component to pass the data.
```bash 
<ThemeContext.Provider value="light">
  App
</ThemeContext.Provider>
```
<br>

Now, you can access this value in any component used within the Provider.

- Create a folder named `components` under the src directory and create a file called `ChangeTheme.jsx` inside it.
  
<img src="https://github.com/user-attachments/assets/aece06c6-7c7d-4ea4-8176-8a163247103c"> <br><br>

- Then copy the following code snippet and paste it into your `ChangeTheme.jsx` file.
```bash 
const ChangeTheme = () => {
    return (
        <div>
            ChangeTheme
        </div>
    )
}

export default ChangeTheme
```
<br>

- Import the component you created into the `App` component. Then use it within the Provider.
```bash 
import ChangeTheme from './components/ChangeTheme'
```

```bash 
<ThemeContext.Provider value="light">
  <ChangeTheme />
</ThemeContext.Provider>
```
<br>

Now, you can access this value within the `ChangeTheme` component using `useContext` Hook.

- Import `useContext` and `ThemeContext` in the `ChangeTheme` component and use them together. Then display the value within the `ChangeTheme` component.
```bash
import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
```

```bash
const theme = useContext(ThemeContext)
```
<br>

## After completing these steps, your final codes should be as follows.

`App.jsx`:
```bash
import ThemeContext from './contexts/ThemeContext'
import ChangeTheme from './components/ChangeTheme'

const App = () => {
  return (
    <ThemeContext.Provider value="light">
      <ChangeTheme />
    </ThemeContext.Provider>
  )
}

export default App
```

`ChangeTheme.jsx`:
```bash
import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const ChangeTheme = () => {
    const theme = useContext(ThemeContext)

    return (
        <div>
            {theme}
        </div>
    )
}

export default ChangeTheme
```

`ThemeContext.js`:
```bash 
import { createContext } from "react"

const ThemeContext = createContext()

export default ThemeContext
```
<br><br>

## Expected Result
When you open your browser, you will see that you can access `theme`.

<img src="https://github.com/user-attachments/assets/e7284b47-e76e-46ad-8c9f-531bb099a1e3"> <br><br>

Note: These steps are for implementing the Context API in the simplest way. I created a more complex application that includes the use of multiple context and other features. Feel free to ask me any questions! <br><br>

## Application Dependencies
To install packages, run the command `npm install`. <br> 
Then, to start the project, run `npm start`.
