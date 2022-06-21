import React from 'react';
// import PropTypes from 'prop-types';
import './ColorChoice.css';

const ColorChoice = (props) => {
  return (
    <section id="colorAndHeart">
      <span>
        <h3 id="userOne">{props.userOne}'s color:</h3>
        <button id="red">🔴</button>
        <button id="orange">🟠</button>
        <button id="yellow">🟡</button>
        <button id="green">🟢</button>
        <button id="blue">🔵</button>
        <button id="purple">🟣</button>
      </span>
      <h2 className="widget" id="heartWidget">
        {props.numLiked} ❤️s
      </h2>
      <span>
        <h3 id="userTwo">{props.userTwo}'s color:</h3>
        <button id="red">🔴</button>
        <button id="orange">🟠</button>
        <button id="yellow">🟡</button>
        <button id="green">🟢</button>
        <button id="blue">🔵</button>
        <button id="purple">🟣</button>
      </span>
    </section>
  );
};

export default ColorChoice;
