import React from "react";

import {PhotoButton} from '../PhotoButton';

import './ButtonGroup.scss';

export const ButtonGroup = () => {
  return (
    <div className="buttons">
      <button className="button button__gallery"></button>

      <PhotoButton />

      <div className="buttons__container">
        <button className="button button__download"></button>
        <button className="button button__info"></button>
      </div>
    </div>
  );
};
