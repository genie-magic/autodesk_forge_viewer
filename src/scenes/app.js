import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import ViewerScene from './ViewerScene/ViewerScene';
import ConfiguratorScene from './ConfiguratorScene/ConfiguratorScene';
const App = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route exact path="/viewer" component={ViewerScene} />
    <Route exact path="/configurator" component={ConfiguratorScene} />
  </main>
);

export default App;
