import React, {useState} from 'react';

import {Camera} from '../src/components/Camera';
import {ButtonGroup} from '../src/components/ButtonGroup';

import './App.scss';

export const App = () => {
  const [showNotification, setShowNotification] = useState(true);

  const handleNotificationOpen = () => {
    setShowNotification(true)
  }

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  return (
    <div className='app'>
        <Camera showNotification={showNotification} handleNotificationClose={handleNotificationClose} />
        <ButtonGroup handleNotificationOpen={handleNotificationOpen} showNotification={showNotification}/>
    </div>
  );
};