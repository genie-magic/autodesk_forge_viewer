import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import ViewerScene from './ViewerScene/ViewerScene';
import ConfiguratorScene from './ConfiguratorScene/ConfiguratorScene';
import ServiceManager from '../services/SvcManager';
class App extends React.Component {
  componentWillMount() {
    this.dialogSvc = ServiceManager.getService('DialogSvc');
    this.dialogSvc.setComponent(this);
  }

  render() {
    return (
      <main>
        <Route exact path="/" component={ConfiguratorScene} />
        <Route exact path="/viewer" component={ViewerScene} />
        <Route exact path="/configurator" component={ConfiguratorScene} />
        {this.dialogSvc.render()}
      </main>
    );
  }
}

export default App;
