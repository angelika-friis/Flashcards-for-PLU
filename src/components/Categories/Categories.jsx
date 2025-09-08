import data from '../../data/data.json';
import { Paper } from '@mui/material';

const Categories = ({ flashcards = [] }) => {
    console.info(flashcards)

    if (flashcards.length === 0) {
        flashcards = data.default;
    };

    return (
        <ul>
            {flashcards.map((category, i) =>
                <li key={category.kategori}>
                    <Paper
                        onClick={() => console.log("click")}
                    >
                        {category.kategori}
                    </Paper>
                </li>
            )}
        </ul>
    )
}

export default Categories;