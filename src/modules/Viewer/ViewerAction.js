import { createActions } from 'redux-actions';

const { setViewerEnv } = createActions({
  SET_VIEWER_ENV: env => ({ env })
});

export { setViewerEnv };
