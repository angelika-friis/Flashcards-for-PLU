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
            <Typography variant='h3' mt={4} color='primary' fontWeight={700} >
                Flashcards
            </Typography>
            <Typography variant='h4' mb={4} color='secondary' fontWeight={500} >
                för PLU
            </Typography>
            {flashcards.map((category) =>
                <CategoryCard key={category.categoryName} category={category} handleClick={handleClick} />
            )}
        </div>
    );
}

export default CategoriesPage;