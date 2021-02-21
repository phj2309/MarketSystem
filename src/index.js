import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import RootStore from '@store/index.js';

import './index.scss';

//import reportWebVitals from './reportWebVitals';

const root = new RootStore();

ReactDOM.render(
  <Provider {...root}>
		<App />
  </Provider>, document.getElementById('root')
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
);

//reportWebVitals();
