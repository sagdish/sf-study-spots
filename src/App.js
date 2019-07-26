import React from 'react';
import { Route } from 'react-router-dom';

import MapsView from './components/coffeeShops/MapsView';
import Default from './components/Default';
import Coffee from './components/Coffee';
import Library from './components/Library';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Default }/>
      <Route path="/coffee" component={ Coffee } />
      <Route path="/library" component={ Library } />
      <Route path="/home" component= { Home } />
      <Route path="mapsview" component={ MapsView } />
    </div>
  );
}

export default App;