import React, { useRef } from 'react';
import {PreviewMessage} from '../PreviewMessge';
import {useDivSize} from '../../utils/hooks/useDivSize';

import './Camera.scss';

export const Camera = ({showNotification, handleNotificationClose}) => {
  const divRef = useRef(null);
  const size = useDivSize(divRef);

  return (
    <div 
      style={{height: `calc(${size.width}px * 1.25)`}} 
      ref={divRef} 
      className={showNotification ? 'camera camera__blurred' : 'camera'}
    >
      {showNotification && (
        <div className='camera__container'>
          <div className="camera__notification">
            <p>
              "This service does not collect or store any users metadata.
            </p>
            <p>
              We do not track or monitor user activity, nor do we collect any information about user behavior ot preferebces."
            </p>
            <button className='camera__button' onClick={handleNotificationClose}>GOT IT!</button>
          </div>
        </div>
      )}

      {!showNotification && <PreviewMessage />}
    </div>
  );
};
