import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// COMPONENTS

import Login from './Pages/Login';
import Playlist from './Pages/Playlist';
import Snackbar from './Components/Snackbar';

const App = () => {



  return(
      <Router>
          <Switch>
            <Route path="/playlist/:uuidUser">
              <Playlist />
            </Route>
            <Route path="/playlist">
              <Snackbar />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
      </Router>
  )
}

export default App;
