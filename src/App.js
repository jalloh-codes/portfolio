import React, {Component} from 'react';
import './App.scss';
import Header from './components/header'
import Home from './components/Home';
import {  BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Container} from 'reactstrap'
import Projects from './components/projects';
import Footer from './components/Footer'
class App extends Component {
  render(){
  return (
    // <Container className="themed-container" fluid={true}>
      <Router>
        <Header/>
          <Switch>
            <Route  exact path="/" render={() =><Home  />} /> 
            <Route  path="/project/" render={() =><Projects  />} /> 
        </Switch>
        <Footer />
      </Router>
      // </Container>
  );
  }
}

export default App;
