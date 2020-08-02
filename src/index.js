import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import ReadSingleSnuContainer from './components/ReadSingleSnu/ReadSingleSnu';
import AboutPage from './components/AboutPage';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
    <HashRouter basename="http://shanghaishonagon.com">
      <Switch>
        <Route exact path="/" component={ReadSingleSnuContainer} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </HashRouter>
);

render(<App/>, document.getElementById('root'));
registerServiceWorker();
