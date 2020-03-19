import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Header  extends Component{

    constructor(){
        super();
        this.state ={
            open: false
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar = (e) =>{
        e.preventDefault();
        this.setState({
            open: !this.state.open
        })
    }

    render(){
    return(
        <header style={{color: 'aliceblue'}} className="header">
                <div className="wraper">
                    <div className="logo"> <i>SJ</i></div>
                    <div className="links">
                        <ul>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/project">Projectsd</Link></li>
                        </ul>
                    </div>
                </div>
        </header>
    );
    }
}

export default Header;