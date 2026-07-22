import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <div>
        <h1>Random GIFS</h1>
      </div>
      <Random />
      <Tag/>
    </div>
  );
}

export default App;
