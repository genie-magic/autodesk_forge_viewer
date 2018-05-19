import { handleActions } from 'redux-actions';

import { setViewerEnv } from './ViewerAction';

const defaultState = {
  viewerEnv: null
};

const reducer = handleActions(
  {
    [setViewerEnv](
      state,
      {
        payload: { env }
      }
    ) {
      // noinspection JSAnnotator
      return {
        ...state,
        viewerEnv: env
      };
    }
  },
  defaultState
);

export default reducer;
