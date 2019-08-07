import React from 'react';
import { Route } from 'react-router-dom';

import MapsView from './components/coffeeShops/MapsView';
import Default from './components/Default';
import Spot from './components/Spot/Spot';
import Library from './components/old&depricated/Library';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Default }/>
      <Route path="/spot" component={ Spot } />
      <Route path="/library" component={ Library } />
      <Route path="/home" component= { Home } />
      {/* <Route path="/mapsview" component={ MapsView } /> */}
    </div>
  );
}

export default App;