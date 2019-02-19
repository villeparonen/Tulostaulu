import React from 'react';

class Counter extends React.Component {
    // Component state. Not visible outside the component.
    state = { score: 0 };
    incrementScore() {
      this.setState(prevState => ({
        score: prevState.score + 1
      }));
    }
    // this.setState() does 2 actions: UPDATE THE VALUE and TELLS REACT TO RE-RENDER
    // state.score += 1; VÄÄRIN
    // state is never manipulated DIRECTLY. 
    // React needs to be told when state changes. with setState.
  
    // THIS refers to the parent that owns the method. (Class counter in this)
    // so you need to BIND your customer methods so that THIS refers to the component.
  
  
  
    decrementScore = () => {
      this.setState(prevState => ({
        score: prevState.score - 1
      }));
      // ARROW FUNCTIONS BIND AUTOMATICLY!
      //Esimerkki yllä: prevState is to render based on previous state. Technically could do without this. But sometimes may lead problems?
    }
  
  
    render() {
      // inside the render THIS refers to the counter component
      // Two ways to bind on onClick. Arrow functions automaticly bind. 
      console.log(this)
      return (
        <div className="counter">
          <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
          <span className="counter-score">{this.state.score}</span>
          <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
        </div>
      );
    }
  }

  export default Counter;