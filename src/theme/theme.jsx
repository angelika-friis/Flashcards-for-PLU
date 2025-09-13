import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#1976d2' },
        secondary: { main: '#9c27b0' },
        background: {
            default: '#f3f6f9', // ljus bakgrund
            paper: '#ffffff',
        },
        text: {
            primary: '#0f1720',
            secondary: '#4b5563',
            disabled: '#adadadff',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#90caf9' },
        secondary: { main: '#ce93d8' },
        background: {
            default: '#121212', // mörk bakgrund
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: '#aaaaaa',
            disabled: '#636363ff',
        },
    },
});
