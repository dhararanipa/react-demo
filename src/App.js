import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import About from './pages/About';
import Text from './pages/Text';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li className="App-link"><Link to="/">Home</Link></li>
          <li className="App-link"><Link to="/about">About</Link></li>
          <li className="App-link"><Link to="/text">Text</Link></li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/text">
            <Text />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
