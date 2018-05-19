import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import viewerReducer from './Viewer/ViewerReducer';

export default combineReducers({
  routing: routerReducer,
  viewer: viewerReducer
});
