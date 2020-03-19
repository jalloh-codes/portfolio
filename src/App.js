import React, {Component} from 'react';
import './App.scss';
import Header from './components/header'
import Footer from './components/footer';
import Home from './components/Home';
import {  BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Projects from './components/projects';
class App extends Component {
  render(){
  return (
    <Router>
      <Header/>
      <div>
        <Switch>
          <Route exact path="/" render={() =><Home  />} /> 
          <Route  path="/project" render={() =><Projects  />} /> 
       </Switch>
      </div>
     <Footer/>
    
    </Router>
  );
  }
}

export default App;
