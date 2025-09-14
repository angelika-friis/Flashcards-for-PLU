import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#3B6197' },
        secondary: { main: '#7293CE' },
        background: {
            default: '#f3f6f9',
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
        primary: { main: '#688FC4' },
        secondary: { main: '#134978' },
        background: {
            default: '#000934',
            paper: '#00214B',
        },
        text: {
            primary: '#ffffff',
            secondary: '#aaaaaa',
            disabled: '#9FC5FDff',
        },
    },
});
