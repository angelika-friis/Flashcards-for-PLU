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

    useEffect(() => {
        setShowDescription(false);
    }, [index]);

    return (
        <Container className={styles.container}>
            <Stack direction={"row"} className={styles.topBar}>
                <IconButton size="large"><Icon icon="tabler:chevron-left" /></IconButton>
                <Typography variant="body1" color="text.disabled">{index + 1} / {numOfCards}</Typography>
            </Stack>
            <Stack gap={3} className={styles.cardContainer}>
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
                    className={styles.cardTerm}
                >
                    {index !== 0 ? (
                        <IconButton onClick={prevCard}>
                            <Icon icon="tabler:chevron-left" />
                        </IconButton>
                    ) : (
                        <div />
                    )}
                    <Typography variant="h6">
                        {term}
                    </Typography>
                    {index < numOfCards - 1 ? (
                        <IconButton onClick={nextCard}>
                            <Icon icon="tabler:chevron-right" />
                        </IconButton>
                    ) : (
                        <div />
                    )}
                </Card>
                {showDescription
                    ? <Card className={styles.cardDescription}>
                        <Typography variant="body1">{explanation}</Typography>
                    </Card>
                    : <Typography variant="caption" color="text.disabled" sx={{ textAlign: 'center' }}>Klicka på kortet för att visa/stänga beskrivningen</Typography>
                }
            </Stack>
        </Container>
    );
};

export default Flashcard;