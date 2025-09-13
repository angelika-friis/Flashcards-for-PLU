import { useEffect } from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard'
import { useState } from 'react';
import data from '../data/data.json';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const CategoriesPage = () => {
    const [flashcards, setFlashcards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setFlashcards(data);
    }, []);

    const handleClick = ((category) => {
        navigate(`/flashcard/${category}/0`)
    })

    return (
        <div>
            <Typography variant='h3' my={4} color='primary' fontWeight={700} >
                Flashcards för PKU
            </Typography>
            {flashcards.map((category) =>
                <CategoryCard key={category.categoryName} category={category} handleClick={handleClick} />
            )}
        </div>
    );
}

export default CategoriesPage;