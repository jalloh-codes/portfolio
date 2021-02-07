import React, {Component} from 'react';
import './App.scss';
import Header from './components/header'
import Home from './components/Home';
import {  BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Projects from './components/projects';
import Skills from './components/skills'
class App extends Component {
  render(){
  return (
    <Router>
      <Header/>
        <Switch>
          <Route  exact path="/" render={() =><Home  />} /> 
          <Route  path="/project/" render={() =><Projects  />} /> 
          <Route path="/skills/" render={() =><Skills />} />
       </Switch>
    </Router>
  );
  }
}

export default App;
