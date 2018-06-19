import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Scores from './pages/scores/Scores';
import Layout from './pages/layout/Layout';

import './assets/index.css';
import 'whatwg-fetch';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/scores" component={Scores} />
    </Switch>
  </Layout>
);

export default App;