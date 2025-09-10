import { useEffect } from 'react';
import Categories from '../components/Categories/Categories'
import { useState } from 'react';
import data from '../data/data.json';
import { useNavigate } from 'react-router-dom';

const CategoriesPage = () => {
    const [flashcards, setFlashcards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setFlashcards(data);
    }, []);

    const onClick = ((category) => {
        navigate(`/flashcard/${category}/0`)
    })

    return (
        <div>
            {flashcards.map((category) =>
                <Categories key={category.categoryName} category={category} onClick={onClick} />
            )}
        </div>
    );
}

export default CategoriesPage;