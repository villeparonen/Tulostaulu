import React from 'react';
import Timer from './Timer';

const Header = (props) => {
    console.log(props);
    // props is an object. 
    return (
      <header className="header">
        <h1>{props.title}</h1>
        <span>Pelaajat: {props.totalPlayers}</span>
        <Timer />
      </header>
    );
  }

  export default Header;