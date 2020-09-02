import React from 'react';
import Store from './index.js';
import List from './List.js';
import Card from './Card.js'

function App(Store) {
  return (
    <main className='App'>
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list"></div>
      {
        List(header, cards)
        Card(title, content)
      }
    </main>
  );
}

export default App;