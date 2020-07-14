import React from 'react';
import {Link} from 'react-router-dom'

const Header = () =>{

    return(
        <header style={{color: 'aliceblue'}} className="header">
                <div className="wraper">
                    <div className="logo"> <i>SJ</i></div>
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