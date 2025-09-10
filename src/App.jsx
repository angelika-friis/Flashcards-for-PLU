import './App.css';
import { Route, Routes } from 'react-router-dom';
import FlashcardPage from './pages/FlashcardPage';
import CategoriesPage from './pages/CategoriesPage';


function App() {

  return (
    <Routes>
      <Route exact path='/' element={<CategoriesPage />} />
      <Route path='/flashcard/:category/:cardId' element={<FlashcardPage />} />
    </Routes>
  );
};

export default App;
