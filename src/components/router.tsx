import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import logo from '../logo.svg';
import { AppState } from '../state/rootReducer';
import { CreateAcct } from './createAcct';
import { Landing } from './landing';
import { UserHome } from './userHome';

// Not a real router, for sake of this exercise

export const Router = () => {
  const routeCurrentPage = () => {
    window.history.pushState(undefined, 'Qualify', '/qualify');
    return <Landing />;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {routeCurrentPage()}
      </header>
    </div>
  );
};
