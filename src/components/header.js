import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../img/Sj.png'
const Header = () =>{

    return(
        <header style={{color: 'aliceblue'}} className="header">
                <div className="wraper">
                    <div className="logo"> <img src={logo}  alt="logo"/> </div>
                    <div className="links">
                        <ul>
                            <li><Link to="/">About</Link></li>
                            <li><Link to={`/project`}>Projects</Link></li>
                        </ul>
                    </div>
                </div>
        </header>
    );
    
}

export default Header;