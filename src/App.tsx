import React from 'react';
import { Cards } from './features/cards/Cards';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Cards />
    </div>
  );
}

export default App;
