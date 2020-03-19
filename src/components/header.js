import React, {Component} from 'react';
import  {Navbar, NavItem, NavLink, Nav, 
    NavbarToggler, Collapse,NavbarBrand, Container} from 'reactstrap';

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
                            <li><a href="/">About</a></li>
                            <li><a href="/projects">Projects</a></li>
                        </ul>
                    </div>
                </div>
        </header>
    );
    }
}

export default Header;