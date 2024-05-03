import React from 'react';
import './HomeStyle.css';

const Home = () => {
  return (
    <div className="title">
      <link href="https://fonts.googleapis.com/css2?family=Jacquard+24&family=Jacquard+24+Charted&family=Jersey+10&display=swap" rel="stylesheet"></link>
      <h1>Arcanaquest</h1>
      <div className="containerButton">
        <button className='button' onClick={() => {window.location.href = '/champselect'}}>Jouer</button>
        <button className='button' onClick={() => {window.location.href = 'https://www.google.com'}}>Quitter</button>
      </div>
    </div>
  );
}

export default Home;
