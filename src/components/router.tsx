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
  let { isPrequalified, isLoggedIn, notQualifiedReason } = useSelector(
    (state: AppState) => state.systemReducer,
  );

  const routeCurrentPage = () => {
    if (!isLoggedIn) {
      if (notQualifiedReason) {
        return <div>{notQualifiedReason}</div>;
      }
      return !isPrequalified ? <Landing /> : <CreateAcct />;
    }

    return <UserHome />;
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
