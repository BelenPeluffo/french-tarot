import { useEffect } from "react";
import { useState } from "react";

const CARDS_DECK = [
  { icon: "♠", color: "black" },
  { icon: "♥", color: "red" },
  { icon: "♦", color: "red" },
  { icon: "♣", color: "black" },
];
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
    return { card: `${value} ${deck.icon}`, color: deck.color };
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
