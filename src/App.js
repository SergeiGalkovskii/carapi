import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Score from './pages/score/Score';

import './assets/index.css';
import 'whatwg-fetch';

const App = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/score" component={Score} />
    </Switch>
);

export default App;