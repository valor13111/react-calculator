import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Calculator from './containers/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <Header />
      <Calculator />
    </div>
  );
}

export default App;
