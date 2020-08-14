import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// COMPONENTS

import Login from './Pages/Login';
import Playlist from './Pages/Playlist';

const App = () => {

  return(
      <Router>
          <Switch>
            <Route path="/playlist">
              <Playlist />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
      </Router>
  )
}

export default App;
