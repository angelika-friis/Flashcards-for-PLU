import Flashcard from "../components/Flashcard/Flashcard";
import data from "../data/data.json";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

const FlashcardPage = () => {
    const params = useParams();
    const navigate = useNavigate();

    const category = params.category || "Versionshantering";
    const cardIndex = Number(params.cardId || 0);

    const [cards, setCards] = useState([]);
    const [card, setCard] = useState([]);
    const [language, setLanguage] = useState("seSimple");

    useEffect(() => {
        category && setCards(data.find(obj => obj.categoryName === category).terms)
    }, [category])

    useEffect(() => {
        if (cards.length > 0 && cardIndex >= 0 && cardIndex < cards.length) {
            setCard(cards[cardIndex]);
        } else {
            setCard(null);
        }
    }, [cards, cardIndex])

    const nextCard = () => {
        navigate(`/flashcard/${category}/${cardIndex + 1}`);

    }

    const prevCard = () => {
        navigate(`/flashcard/${category}/${cardIndex - 1}`)
    }

    const hasValidCard =
        cards.length > 0 && cardIndex >= 0 && cardIndex < cards.length;

    return (
        <div>
            {hasValidCard &&
                <Flashcard
                    key={cardIndex}
                    data={cards[cardIndex]}
                    index={cardIndex}
                    numOfCards={cards.length}
                    nextCard={nextCard}
                    prevCard={prevCard}
                    language={language}
                    setLanguage={setLanguage}
                />
            }
        </div>
    )
}
export default FlashcardPage;