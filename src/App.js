import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const isProduction = process.env.REACT_APP_NAME === 'production';
  
  return (
    <>
    {isProduction && (
      <div  className="production-banner">
        <h1>Production Environment</h1>
        <p>You are viewing the production version served by ngnix</p>
      </div>
    )}

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {isProduction
          ? "This is the Production Server" 
          : "This is the Development Server"}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and Tests
        </a>
      </header>
    </div>
    {isProduction && (
      <div className='production-footer'>
        <p><strong>Production Server Footer</strong></p>
        <p className="small">Powered by Ngnix | Docker container | @2026</p>
      </div>
    )}
    </>
  );
}

export default App;
