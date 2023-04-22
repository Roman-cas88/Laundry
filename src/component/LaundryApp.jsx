import React from 'react';
import { MainView } from './mainView/MainView';
 import { Login } from './login/Login';

export const LaundryApp = () => {
  const isAuth = false;
  return (
    <div>
      {isAuth 
        ? <MainView />
        : <Login />
      }
    </div>
  )
}
