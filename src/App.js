import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <div className="wrapper">
        <Content />
      </div>
    </div>
  );
}

export default App;
