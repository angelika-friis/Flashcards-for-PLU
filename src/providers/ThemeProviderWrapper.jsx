import { useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from '../theme/theme'
import App from '../App'

const ThemeProviderWrapper = () => {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <App darkMode={darkMode} setDarkMode={setDarkMode} />
        </ThemeProvider>
    )
}

export default ThemeProviderWrapper
