import React, { useState } from 'react';
import {CounterMessage} from '../CounterMessage';

import './PhotoButton.scss';

export function PhotoButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className='photoButton__container'>
        <div className='photoButton__counter'>{count}/3</div>
        <button className='photoButton__button' onClick={handleClick}>
            <div className='photoButton__icon'></div>
        </button>

        <CounterMessage count={count} onReset={handleReset} />
    </div>
  );
}
