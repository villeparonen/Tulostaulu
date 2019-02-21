import React, { Component } from 'react';
import Player from './Player';
import Header from './Header';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  // Application state for whole app. All childs can access this. 
  state = {
    players: [
      {
        name: "Ville",
        score: 0,
        id: 1
      },
      {
        name: "Essi",
        score: 0,
        id: 2
      },
      {
        name: "Tommi",
        score: 0,
        id: 3
      },
      {
        name: "Panu",
        score: 0,
        id: 4
      }
    ]
  }


  scoreChange = (index, changer) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += changer
    }));
    console.log('index: ' + index, 'changer: ' + changer);
  }

  // player id counter
  prevPlayerId = 4;


  addPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name: name,
          score: 0,
          id: this.prevPlayerId += 1,
        }]
    });
  }

  removePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div>
        <div className="tableview">
          <Header
            title="Tulostaulu"
            totalPlayers={this.state.players.length}
          />
          {this.state.players.map((player, index) =>
            // Passing props to Player, child of app.
            <Player
              name={player.name}
              key={player.id.toString()}
              id={player.id}
              score={player.score}
              index={index}
              changeScore={this.scoreChange}
              removePlayer={this.removePlayer}
            />
          )}
          <AddPlayerForm addPlayer={this.addPlayer} />
        </div>
      </div>
    );
  }
}

export default App;
