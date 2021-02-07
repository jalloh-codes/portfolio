import React from 'react';
import {Link} from 'react-router-dom'



const Header = () =>{

    return(
        <header className="header">
                <div className="wraper">
                        <ul className="links">
                            <li><Link to="/">About me</Link></li>
                            <li><Link to={`/project`}>Projects</Link></li>
                            <li><Link to={`/skills`}>Skills</Link></li>
                        </ul>
                </div>
        </header>
    );
    
}

export default Header;