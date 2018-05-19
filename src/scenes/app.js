import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import ViewerScene from './ViewerScene/ViewerScene';
const App = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route exact path="/viewer" component={ViewerScene} />
  </main>
);

export default App;
