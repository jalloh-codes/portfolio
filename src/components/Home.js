import React, {Component} from 'react';
import  {Container, Jumbotron} from 'reactstrap';
class Home  extends Component{

    render(){
    return(
        <div className="home">
           <div className="info">
               <div>
               <p>Hello!!!</p>
               <p>
               My is <span>Saylu Jalloh</span>, I'm an undergrade student at the New
                York City Colloge Of Technology. I'm a posonate Web Developer, with the skills of 
                <i> HTML</i>, <i>CSS</i>, <i>Java</i>, <i>JavaScript</i>, 
               </p>
               </div>
           </div>
        </div>
    );
    }
}

export default Home;