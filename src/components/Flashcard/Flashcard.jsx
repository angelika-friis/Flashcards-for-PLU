import { Button, Typography, Card, Stack, IconButton, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from './Flashcard.module.css';
import { useNavigate } from "react-router";
import ReactMarkdown from "react-markdown";

const Flashcard = ({ data, index = 0, numOfCards = 5, nextCard, prevCard, language, setLanguage }) => {
    const [term, setTerm] = useState("");
    const [explanation, setExplanation] = useState("");
    const [showDescription, setShowDescription] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        setTerm(data?.term || "Kortet kunde inte laddas");
    }, [])

    useEffect(() => {
        setExplanation(data?.[language] || "Beskrivning kunde inte laddas")
    }, [language])

    useEffect(() => {
        setShowDescription(false);
    }, [index]);

    return (
        <Container className={styles.container}>
            <Stack direction={"row"} className={styles.topBar}>
                <IconButton
                    onClick={() => navigate('/')}
                    size="large"
                >
                    <Icon icon="tabler:chevron-left" />
                </IconButton>
                <div className={styles.numOfCards}>
                    <Typography color="text.disabled" >{index + 1} / {numOfCards}</Typography>
                </div>
            </Stack>
            <Stack gap={3} className={styles.cardContainer}>
                <Stack direction={"row"} gap={2}>
                    {[{ name: 'en', value: 'en' }, { name: 'sv', value: 'se' }, { name: 'enkel', value: 'seSimple' }].map((button) => (
                        <Button
                            key={button.value}
                            variant="contained"
                            size="small"
                            sx={{ borderRadius: "20px", textTransform: "none", backgroundColor: button.value === language ? "primary.light" : "primary.main" }}
                            onClick={() => setLanguage(button.value)}
                        >
                            {button.name}
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
                        <ReactMarkdown>
                            {explanation}
                        </ReactMarkdown>
                    </Card>
                    : <Typography variant="caption" color="text.disabled" sx={{ textAlign: 'center' }}>Klicka på kortet för att visa/stänga beskrivningen</Typography>
                }
            </Stack>
        </Container>
    );
};

export default Flashcard;