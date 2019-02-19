import React from 'react';
var createReactClass = require('create-react-class');

var Timer = createReactClass({
  getInitialState: function () {
    return {
      running: false,
      elapsedTime: 0,
      previousTime: 0,
    }
  },

  componentDidMount: function () {
    this.interval = setInterval(this.onTick, 100);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  onTick: function () {
    if (this.state.running) {
      var now = Date.now();
      this.setState({
        previousTime: now,
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
      });
    }
    console.log("ontick");
  },

  onStart: function () {
    this.setState({
      running: true,
      previousTime: Date.now(),
    });
  },

  onStop: function () {
    this.setState({ running: false });
  },

  onReset: function () {
    this.setState({
      elapsedTime: 0,
      previousTime: Date.now(),
    });
  },

  render: function () {
    var seconds = Math.floor(this.state.elapsedTime / 1000);

    return (
      <div className="Timer">
        <h2>Ajastin</h2>
        <div className="Timer-time">{seconds}</div>
        {this.state.running ?
          <button onClick={this.onStop}>Pysäytä</button>
          :
          <button onClick={this.onStart}>Aloita</button>
        }
        <button onClick={this.onReset}>Nollaa</button>
      </div>
    )
  }
});

export default Timer;