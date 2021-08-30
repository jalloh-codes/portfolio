import React from 'react';
import {Link} from 'react-router-dom'



const Header = () =>{

    return(
        <header className="header">
            <div className="header-name">
                <h5>Saylu Jalloh</h5>
            </div>
            <div className="wraper">
                    <ul className="links">
                        <li><Link to="/">About</Link></li>
                        <li><Link to={`/project`}>Projects</Link></li>
                        {/* <li><Link to={`/#skills`}>Tools Box</Link></li> */}
                    </ul>
            </div>
            <div className="icon-wrapper">
                <a href="https://www.linkedin.com/in/saylujalloh/">
                <i className="devicon-linkedin-plain"></i>
                    
                </a>
                <a href="https://github.com/jalloh-codes">
                <i className="devicon-github-original"></i>
                </a>
                <a href="https://www.youtube.com/channel/UC17Nog3DgKCHuxndDugPiCg?view_as=subscriber">
                    <i className="fab fa-youtube fa-1x"></i>
                </a>
                <a href="https://codepen.io/jalloh-code">
                    <i className="devicon-codepen-plain"></i>
                </a>
            </div>
        </header>
    );
    
}

export default Header;