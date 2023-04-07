import React from 'react';

import './CounterMessage.scss';

export function CounterMessage(props) {
  const { count, onReset } = props;

  if (count === 3) {
    return (
      <div className='counter__container'>
        <p className='counter__text'>"You've reached the maximum number of attempts."</p>
        <button className='counter__button' onClick={onReset}>RESET</button>
      </div>
    );
  }

  return null;
}
