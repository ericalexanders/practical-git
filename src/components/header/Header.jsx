import React from 'react';
import './Header.css';

const Header = ({ logo }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Curso <code>git</code> con React.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
)

export default Header;