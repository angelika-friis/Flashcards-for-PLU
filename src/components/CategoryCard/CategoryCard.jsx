import { Paper, Typography } from '@mui/material';
import styles from './CategoryCard.module.css';
import { Icon } from '@iconify/react';

const CategoryCard = ({ category = [], handleClick }) => {

    return (
        <Paper
            onClick={() => handleClick(category.categoryName)}
            className={styles.categoryCard}
        >
            <div>
                <Icon icon="lets-icons:check-fill" color='#134978' className={styles.checkIcon} />
                <Typography sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }}>
                    {category?.categoryName || "Kategori kunde inte laddas 🫣"}
                </Typography>
            </div>
            <Typography variant='body1' color='text.disabled' className={styles.numOfCards}>
                ({category?.terms?.length || "Fel"})
            </Typography>
        </Paper>
    )
}

export default CategoryCard;