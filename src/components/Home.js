import React, {Component} from 'react';

class Home  extends Component{

    render(){
    return(
        <div className="home">
           <div className="info">
               <div className="note">
               <p className="text">
               Hello, my name is <span>Saylu Jalloh</span>. 
               I am an undergraduate student at the New York City College Of Technology.
               I am pursuing a Bachelor in Technology in Computer Systems Technology.
               </p>
               </div>
               <div className="note">
               <p className="text">
               I am a passionate web & mobile developer. 
               I enjoy building frontend and backend applications.
                </p>
               </div>
           </div>
           <div className="icon-wrapper">
                        <a href="https://www.linkedin.com/in/saylujalloh/">
                        <i class="devicon-linkedin-plain"></i>
                            
                        </a>
                        <a href="https://github.com/jalloh-codes">
                        <i class="devicon-github-original"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UC17Nog3DgKCHuxndDugPiCg?view_as=subscriber">
                            <i className="fab fa-youtube fa-1x"></i>
                        </a>
                        <a href="https://codepen.io/jalloh-code">
                            <i class="devicon-codepen-plain"></i>
                        </a>
            </div>
        </div>
    );
    }
}

export default Home;
