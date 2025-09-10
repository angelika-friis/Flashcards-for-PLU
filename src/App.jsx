import './App.css';
import { Route, Routes } from 'react-router-dom';
import FlashcardPage from './pages/FlashcardPage';


function App() {

  return (
    <Routes>
      <Route path='/flashcard/:category/:cardId' element={<FlashcardPage />} />
    </Routes>
  );
};

export default App;
