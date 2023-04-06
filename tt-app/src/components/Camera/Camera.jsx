import React, { useState, useEffect } from 'react';

import './Camera.scss';

export const Camera = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 15000);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='camera'>
      {showNotification && (
        <div className='camera__notification'>
          "Who is the cutest kitty?"
        </div>
      )}
    </div>
  );
};
