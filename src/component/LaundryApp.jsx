import React from 'react';
import { MainView } from './mainView/MainView';
 import { Login } from './login/Login';

export const LaundryApp = ({isAuth}) => {
  return (
    <div>
      {isAuth 
        ? <MainView />
        : <Login />
      }
      <MainView />
    </div>
  )
}
