import defaultConfig from './config';
import devConfig from './dev.config';
import prodConfig from './prod.config';
let config;
if (process.env.NODE_ENV == 'development') {
  config = { ...defaultConfig, ...devConfig };
} else {
  config = { ...defaultConfig, ...prodConfig };
}

export default config;
