import { Button, Typography, Card, Stack, IconButton, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from './Flashcard.module.css';

const Flashcard = ({ data, index = 0, numOfCards = 5, nextCard, prevCard }) => {
    const [language, setLanguage] = useState("enkel");
    const [term, setTerm] = useState("");
    const [explanation, setExplanation] = useState("");
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        setTerm(data.term);
    }, [])

    useEffect(() => {
        setExplanation(data[language])
    }, [language])

    return (
        <>
            <Stack direction={"row"} className={styles.header}>
                <IconButton size="large"><Icon icon="tabler:chevron-left" /></IconButton>
                <Typography variant="body1" color="text.disabled">{index + 1} / {numOfCards}</Typography>
            </Stack>
            <Container className={styles.container}>
                {index !== 0 &&
                    <IconButton onClick={() => nextCard()}>
                        <Icon icon="tabler:chevron-left" />
                    </IconButton>
                }
                <Stack gap={3} className={styles.cardWrapper}>
                    <Stack direction={"row"} gap={2}>
                        {["en", "sv", "enkel"].map((l) => (
                            <Button
                                key={l}
                                variant="contained"
                                size="small"
                                sx={{ borderRadius: "20px", textTransform: "none" }}
                                onClick={() => setLanguage(l)}
                            >
                                {l}
                            </Button>
                        ))}
                    </Stack>
                    <Card
                        onClick={() => !showDescription ? setShowDescription(true) : setShowDescription(false)}
                        className={styles.card}
                    >
                        <Typography variant="h6">
                            {term}
                        </Typography>
                    </Card>
                    {showDescription &&
                        <Card className={styles.card}>
                            <Typography variant="body1">{explanation}</Typography>
                        </Card>}
                </Stack>
                <IconButton onClick={() => prevCard}>
                    <Icon icon="tabler:chevron-right" />
                </IconButton>
            </Container>
        </>
    );
};

export default Flashcard;