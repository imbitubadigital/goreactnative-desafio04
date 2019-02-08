import React, { Fragment } from 'react';

import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import store from './store';
import Routes from './routes';


const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
    </Fragment>
  </Provider>
);

export default App;
