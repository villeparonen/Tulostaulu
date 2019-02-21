import React from 'react';
import Counter from './Counter';

function Player(props) {
  return (
    <div className="player">
      <span className="player-name">
        <a className="remove-player" onClick={() => props.removePlayer(props.id)}>X</a>
        {props.name}
      </span>
      <div className="player-score">
        <Counter
          score={props.score}
          index={props.index}
          changeScore={props.changeScore} />
      </div>
    </div>
  )
}

export default Player;