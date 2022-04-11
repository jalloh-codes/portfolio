import React, {useState} from 'react';
import {Link} from 'react-router-dom'



const Header = () =>{


    const [res, setRes] = useState(false)
    const responsive = () =>{
        const doc=document.getElementById('myheader')
        if(doc.className === 'header not-resp'){
            doc.classList.remove('not-resp')
            doc.className += ' responsive'
            setRes(true)
        }else{
            doc.className = 'header not-resp'
            setRes(false)
        }
    }



    return(
        <header className="header not-resp" id="myheader">
            <div className="header-name">
                <h5>Saylu Jalloh</h5>
            </div>
            <div className="hide-menu">
                <div className="wraper">
                        <ul className="links">
                            <li><Link to="/">About</Link></li>
                            <li><Link to={`/project`}>Projects</Link></li>
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
            </div>
            <div className="menu-burger">
                <button className="menu-btn" onClick={() => responsive()}>
                    <i class={res? "fa fa-times" :"fa fa-bars"} aria-hidden="true"></i>
                   
                </button>
            </div>
        </header>
    );
    
}

export default Header;