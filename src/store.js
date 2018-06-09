import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import ServiceManager from './services/SvcManager';
import DialogSvc from './services/DialogSvc';
import ModelSvc from './services/ModelSvc';

// ========================================================
// Services Initialization
// ========================================================
const dialogSvc = new DialogSvc();
const modelSvc = new ModelSvc({
  apiUrl: '/api/models'
});

// ========================================================
// Services Registration
// ========================================================
ServiceManager.registerService(dialogSvc);
// ServiceManager.registerService(modelSvc);

export const history = createHistory();

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
