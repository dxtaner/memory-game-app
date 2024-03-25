// Header.js

import React from "react";
import "./Header.css";
import { newGame, resetScore } from "../../redux-thunk/cardSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const score = useSelector((state) => state.cards.score);
  const dispatch = useDispatch();

  const handleNewGame = () => {
    dispatch(newGame());
    dispatch(resetScore());
  };

  return (
    <header className="header-container">
      <h1 className="header-title">Memory Game</h1>
      <div className="header-content">
        <div className="header-info">
          <h4>Your Score:</h4>
          <p className="header-score">{score}</p>
        </div>
        <button type="button" className="btn" onClick={handleNewGame}>
          New Game
        </button>
      </div>
    </header>
  );
};

export default Header;
