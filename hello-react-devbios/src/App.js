import React, { Component } from "react";
import './App.css';
import DisplayBios from "./DisplayBios";
import AddDeveloper from "./AddDeveloper";
import Developer from "./Developer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        developers: []
    }
}
componentDidMount() {
  fetch("https://tech-services-1000201953.uc.r.appspot.com/developers")
  .then(response => response.json())
  .then(dev => this.setState({developers: dev}))
  .catch(error => console.log("error"+ error));
}
addDeveloper = (developer) => {
developer.id = this.state.developers.length + 1;
let newDevs = [...this.state.developers, developer];
this.setState({developers: newDevs});
}
render() {
  return (
    <Router>
      <NavBar/>
      <Switch>
<Route exact path="/">
<Home/>
</Route>
<Route  path="/bios">
<DisplayBios developers={this.state.developers}/>
</Route>
<Route path="/create-bio">
<AddDeveloper addDeveloper={this.addDeveloper}/>
</Route>
<Route path="*">
<div>Page Not Found!!!</div>
</Route>
      </Switch>
    </Router>     
  );
  }
}

export default App;
