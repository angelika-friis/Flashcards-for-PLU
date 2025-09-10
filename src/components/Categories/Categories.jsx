import { Paper, Typography } from '@mui/material';
import styles from './Categories.module.css';
import { Icon } from '@iconify/react';

const Categories = ({ category = [], onClick }) => {

    return (
        <Paper
            onClick={() => onClick(category.categoryName)}
            className={styles.categoryCard}
        >
            <Icon icon="lets-icons:check-fill" color='lightgray' />
            <Typography variant='body1'>
                {category.categoryName}
            </Typography>
            <Typography variant='body1' className={styles.numOfCards}>
                ({category.terms.length})
            </Typography>
        </Paper>
    )
}

export default Categories;