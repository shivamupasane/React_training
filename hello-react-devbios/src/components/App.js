import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import '../styles/App.css';
import DisplayBios from './DisplayBios';
import AddDeveloper from './AddDeveloper';
import Home from './Home';
import Navbar from './NavBar';
import EditDeveloper from './EditDeveloper';

function App(){
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/bios">
            <DisplayBios />
          </Route>
          <Route path="/create-bio">
            <AddDeveloper />
          </Route>
          <Route path="/edit/:id">
            <EditDeveloper/>
          </Route>
          <Route path="*"><div>Page Not Found</div></Route>
        </Switch>
      </Router>
  );
}

export default App;

