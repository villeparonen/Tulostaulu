import React, { Component } from 'react';
import Player from './Player';
import Header from './Header';
import './App.css';

class App extends Component {
  state = {
    players: [
      {
        name: "Ville",
        id: 1
      },
      {
        name: "Essi",
        id: 2
      },
      {
        name: "Tommi",
        id: 3
      },
      {
        name: "Panu",
        id: 4
      }
    ]
  }

  render() {
    return (
      <div>
      <div className="scoreboard">
        <Header
          title="Tulostaulu"
          totalPlayers={this.state.players.length}
        />
        {this.state.players.map(player =>
          <Player
            name={player.name}
            score={player.score}
            key={player.id}
          />
        )}
      </div>
      </div>
    );
  }
}

export default App;
