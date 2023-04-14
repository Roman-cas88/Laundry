import React from 'react';
import { MainView } from './mainView/MainView';
 import { Login } from './login/Login';

export const LaundryApp = () => {
  return (
    <div>
      <Login />
      <MainView />
    </div>
  )
}
