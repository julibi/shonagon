import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import rootReducer from './reducers';
import './index.css';
import ReadSingleSnuContainer from './components/ReadSingleSnu/ReadSingleSnuContainer';
import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router>
        <div>
          <div>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
            </ul>
          </div>
          <div>
            <Route exact path="/" component={ReadSingleSnuContainer} />
          </div>
        </div>
      </Router>
  </Provider>
);

render(<App/>, document.getElementById('root'));
registerServiceWorker();
