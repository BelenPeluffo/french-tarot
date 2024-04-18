import { useEffect } from "react";
import { useState } from "react";

const CARDS_DECK = [
  {
    icon: "♠",
    color: "black",
    polarity: "negative",
    meaning: "issues, frustration, learning through adversity",
  },
  {
    icon: "♥",
    color: "red",
    polarity: "positive",
    meaning: "love, family, home",
  },
  { icon: "♦", color: "red", polarity: "positive", meaning: "money" },
  {
    icon: "♣",
    color: "black",
    polarity: "negative",
    meaning: "work, comunication",
  },
];
const CARDS_VALUES = [
  { value: "A", meaning: "beginnings" },
  { value: "2", meaning: "exchange" },
  { value: "3", meaning: "increase" },
  { value: "4", meaning: "balance" },
  { value: "5", meaning: "body" },
  { value: "6", meaning: "path" },
  { value: "7", meaning: "trouble" },
  { value: "8", meaning: "ideas" },
  { value: "9", meaning: "change" },
  { value: "10", meaning: "endings" },
  { value: "J", meaning: "message, youth" },
  { value: "Q", meaning: "truth" },
  { value: "K", meaning: "power" },
];

const Table = () => {
  const [selectedCards, setSelectedCards] = useState(null);
  const [showPolarity, setShowPolarity] = useState(false);
  const [showValueMeaning, setShowValueMeaning] = useState(false);
  const [showDeckMeaning, setShowDeckMeaning] = useState(false);

  const getRandomCard = () => {
    const deck =
      CARDS_DECK[Math.round(Math.random() * (CARDS_DECK.length - 1))];
    const value =
      CARDS_VALUES[Math.round(Math.random() * (CARDS_VALUES.length - 1))];
    return {
      card: `${value.value} ${deck.icon}`,
      color: deck.color,
      cardPolarity: deck.polarity,
      cardMeaning: deck.meaning,
      valueMeaning: value.meaning,
    };
  };

  const setCards = () => {
    const card = getRandomCard();
    if (!selectedCards.includes(card)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  useEffect(() => {
    if (selectedCards && selectedCards.length < 4) {
      setCards();
    }
  }, [selectedCards]);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        {["Past", "Present", "Future"].map((title, index) => (
          <div className="card-container" key={index}>
            <div>{title}</div>
            {selectedCards && selectedCards.length > 2 ? (
              <div className={`card ${selectedCards[index].color}`}>
                {selectedCards[index].card}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {showPolarity ? (
          <div className="data">
            <div>Polarity</div>
            <button></button>
          </div>
        ) : null}
        {showValueMeaning ? (
          <div className="data">
            <div>Value Meaning</div>
            <button></button>
          </div>
        ) : null}
        {showDeckMeaning ? (
          <div className="data">
            <div>Deck Meaning</div>
            <button></button>
          </div>
        ) : null}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {selectedCards && selectedCards.length > 2 ? (
          <>
            <button onClick={() => setShowPolarity(!showPolarity)}>
              Color interpretation
            </button>
            <button onClick={() => setShowValueMeaning(!showValueMeaning)}>
              Number interpretation
            </button>
            <button onClick={() => setShowDeckMeaning(!showDeckMeaning)}>
              Deck interpretation
            </button>
          </>
        ) : (
          <button onClick={() => setSelectedCards([])}>Show cards</button>
        )}
      </div>
    </div>
  );
};

export default Table;
