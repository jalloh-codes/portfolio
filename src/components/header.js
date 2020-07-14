import React, {Component} from 'react';
import {Link, useRouteMatch} from 'react-router-dom'

const Header = () =>{

    // constructor(){
    //     super();
    //     this.state ={
    //         open: false
    //     }
    //     this.toggleNavbar = this.toggleNavbar.bind(this);
    // }

    // toggleNavbar = (e) =>{
    //     e.preventDefault();
    //     this.setState({
    //         open: !this.state.open
    //     })
    // }
   // match = useRouteMatch();

    //render(){
        
        let match = useRouteMatch();
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