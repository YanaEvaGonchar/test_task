import React, { useState, useEffect } from 'react';
import {CounterMessage} from '../CounterMessage';

import './PhotoButton.scss';

export function PhotoButton({showNotification}) {
  const [count, setCount] = useState(0);
  const [isLimit, setIsLimit] = useState(false);

  function handleClick() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  useEffect(() => {
    if (count === 3) {
      setIsLimit(true);
    }
    
    if (count < 3) {
      setIsLimit(false);
    }
  }, [count]);

  return (
    <div className='photoButton__container'>
        <div className={showNotification ? 'photoButton__counter photoButton__counter--disabled' : 'photoButton__counter'}>{count}/3</div>
        <button 
          className={showNotification ? 'photoButton__button photoButton__button--disabled' : 'photoButton__button'}
          disabled={isLimit || showNotification} 
          onClick={handleClick}>
            <div className='photoButton__icon'></div>
        </button>

        {!showNotification && <CounterMessage count={count} onReset={handleReset} />}
    </div>
  );
}
