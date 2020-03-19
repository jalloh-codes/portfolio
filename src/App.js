import React, {Component} from 'react';
import './App.scss';
import Header from './components/header'
import {Container} from 'reactstrap';
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
          <Route exact path="/projects" render={() =><Projects  />} /> 
       </Switch>
      </div>
     <Footer/>
    
    </Router>
  );
  }
}

export default App;
