import React from 'react';
import './Player.css';

const Player = (props) => (
  <li className="Player">
    <span className="Player__name">{props.name}</span>
    <span className="Player__score">{props.score}</span>
    <button className="Player__button_plus1" onClick={() => props.onPlayerScoreChange(1)} >+</button>
    <button className="Player__button_minus1" onClick={() => props.onPlayerScoreChange(-1)} >-</button>
  </li>
);

export default Player;
