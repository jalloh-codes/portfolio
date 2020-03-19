import React, { Component } from 'react';
import {Container, Row} from 'reactstrap';

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                   <div className="wraper">
                       <span>Follow me:</span>
                        <a href="https://www.linkedin.com/in/saylu-jalloh-997487132">
                            <i className="fab fa-linkedin fa-3x"></i>
                        </a>
                        <a href="https://github.com/jalloh-codes">
                            <i className="fab fa-github fa-3x"></i>
                        </a>
                    </div>
            </footer>
        );
    }
}
export default Footer;