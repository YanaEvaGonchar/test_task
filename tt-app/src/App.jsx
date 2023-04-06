import React from 'react';

import {Camera} from '../src/components/Camera';
import {ButtonGroup} from '../src/components/ButtonGroup';

import './App.scss';

export const App = () => {
  return (
    <div className='app'>
        <Camera />
        <ButtonGroup />
    </div>
  );
};