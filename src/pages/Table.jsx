import { useEffect } from "react";
import { useState } from "react";

const CARDS_DECK = ["♠", "♥", "♦", "♣"];
const CARDS_VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const Table = () => {
  const [selectedCards, setSelectedCards] = useState(null);

  const getRandomCard = () => {
    const deck =
      CARDS_DECK[Math.round(Math.random() * (CARDS_DECK.length - 1))];
    const value =
      CARDS_VALUES[Math.round(Math.random() * (CARDS_VALUES.length - 1))];
    return `${value} ${deck}`;
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
        <div className="card-container">
          <div>Past</div>
          <div className="card">{selectedCards ? selectedCards[0] : null}</div>
        </div>
        <div className="card-container">
          <div>Present</div>
          <div className="card">{selectedCards ? selectedCards[1] : null}</div>
        </div>
        <div className="card-container">
          <div>Future</div>
          <div className="card">{selectedCards ? selectedCards[2] : null}</div>
        </div>
      </div>
      <div>
        <button
          style={{ marginTop: "10px" }}
          onClick={() => setSelectedCards([])}
        >
          Show cards
        </button>
      </div>
    </div>
  );
};

export default Table;
