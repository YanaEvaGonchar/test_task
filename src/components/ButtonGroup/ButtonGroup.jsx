import React from "react";

import {PhotoButton} from '../PhotoButton';

import './ButtonGroup.scss';

export const ButtonGroup = ({handleNotificationOpen, showNotification}) => {
  return (
    <div className="buttonGroup">
      <button disabled={showNotification} className="buttonGroup__button buttonGroup__gallery">
        <div className='buttonGroup__gallery--icon'></div>
      </button>

      <PhotoButton showNotification={showNotification}/>

      <div className="buttonGroup__container">
        <button disabled={showNotification} className="buttonGroup__button buttonGroup__download">
          <div className='buttonGroup__download--icon'></div>
        </button>

        <button disabled={showNotification} onClick={handleNotificationOpen} className="buttonGroup__button buttonGroup__info">
          <div className='buttonGroup__info--icon'></div>
        </button>
      </div>
    </div>
  );
};
