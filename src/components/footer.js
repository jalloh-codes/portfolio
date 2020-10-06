import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                   <div className="wraper">
                        <a href="https://www.linkedin.com/in/saylu-jalloh-997487132">
                            <i className="fab fa-linkedin fa-3x"></i>
                        </a>
                        <a href="https://github.com/jalloh-codes">
                            <i className="fab fa-github fa-3x"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UC17Nog3DgKCHuxndDugPiCg?view_as=subscriber">
                            <i className="fab fa-youtube fa-3x"></i>
                        </a>
                    </div>
            </footer>
        );
    }
}
export default Footer;