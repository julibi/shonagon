import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootReducer from './reducers';
import './index.css';
import ReadSingleSnuContainer from './components/ReadSingleSnu/ReadSingleSnu';

import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Router>
      <Route exact path="/" component={ReadSingleSnuContainer} />
    </Router>
  </Provider>
);

render(<App/>, document.getElementById('root'));
registerServiceWorker();