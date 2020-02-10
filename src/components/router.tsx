import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Landing } from './landing';

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
