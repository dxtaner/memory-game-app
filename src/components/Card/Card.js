import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  activeToggle,
  increment,
  scoreDecrement,
  scoreIncrement,
} from "../../redux-thunk/cardSlice";
import "./Card.css";

function Card() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.items);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [choiceOne, choiceTwo] = selectedCards;

      if (choiceOne.key === choiceTwo.key) {
        dispatch(increment());
        dispatch(scoreIncrement());
      } else {
        setTimeout(() => {
          dispatch(activeToggle(choiceOne.id));
          dispatch(activeToggle(choiceTwo.id));
          dispatch(scoreDecrement());
        }, 500);
      }

      setSelectedCards([]);
    }
  }, [selectedCards, dispatch]);

  function handleClick(card) {
    if (selectedCards.length < 2) {
      dispatch(activeToggle(card.id));
      setSelectedCards([...selectedCards, card]);
    }
  }

  return (
    <section className="memoryGame">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`memoryCard ${card.status ? "active" : ""} ${
            selectedCards.length === 2 ? "disabled" : ""
          }`}
          onClick={() => handleClick(card)}>
          <div className="back">?</div>
          <div className="front">
            <img src={card.img} alt={`Card ${card.id}`} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Card;
