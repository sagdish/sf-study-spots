import React from 'react';
import { Route } from 'react-router-dom';

import Default from './components/Default';
import Coffee from './components/Coffee';
import Library from './components/Library';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Default }/>
      <Route path="/coffee" component={ Coffee } />
      <Route path="/library" component={ Library } />
    </div>
  );
}

export default App;