import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/MainLayout';
import FlashcardPage from './pages/FlashcardPage';
import CategoriesPage from './pages/CategoriesPage';


function App({ darkMode, setDarkMode }) {

  return (
    <BrowserRouter>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Routes>
          <Route exact path='/' element={<CategoriesPage />} />
          <Route path='/flashcard/:category/:cardId' element={<FlashcardPage />} />
        </Routes>
      </Layout>
    </BrowserRouter >
  );
};

export default App;
