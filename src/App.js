import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Scores from './pages/scores/Scores';
import './assets/index.css';
import 'whatwg-fetch';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/scores">Scores</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/scores" component={Scores} />
    </main>
  </div>
)

export default App;