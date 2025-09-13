import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ThemeProviderWrapper from './providers/ThemeProviderWrapper'

createRoot(document.getElementById('root')).render(
  <ThemeProviderWrapper />
)
