import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import rootReducer from './reducers';
import './index.css';
import ReadSingleSnuContainer from './components/ReadSingleSnu/ReadSingleSnuContainer';
import ReadSnusContainer from './components/ReadSnus/ReadSnusContainer';
import CreateSnuContainer from './components/CreateSnu/CreateSnuContainer';
import SignUpContainer from './components/SignUp/SignUpContainer';
import LogInContainer from './components/LogIn/LogInContainer';
import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Router>
        <div>
          <div className="navigation">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/read">History</NavLink></li>
              <li><NavLink to="/new">Create New</NavLink></li>
              <li><SignUpContainer /></li>
              <li><LogInContainer /></li>
            </ul>
          </div>
          <div>
            <Route exact path="/" component={ReadSingleSnuContainer} />
            <Route exact path="/read" component={ReadSnusContainer} />
            <Route exact path="/new" component={CreateSnuContainer} />
          </div>
        </div>
      </Router>
  </Provider>
);

render(<App/>, document.getElementById('root'));
registerServiceWorker();
