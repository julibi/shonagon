import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import ReadSingleSnuContainer from './components/ReadSingleSnu/ReadSingleSnu';
import AboutPage from './components/AboutPage';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={ReadSingleSnuContainer} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </Router>
);

render(<App/>, document.getElementById('root'));
registerServiceWorker();
