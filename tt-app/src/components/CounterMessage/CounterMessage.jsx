import React from 'react';

export function CounterMessage(props) {
  const { count, onReset } = props;

  if (count === 3) {
    return (
      <div>
        <p>You've reached the maximum number of attempts.</p>
        <button onClick={onReset}>Reset Counter</button>
      </div>
    );
  }

  return null;
}
