import { faFacebookF, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ViewPortProvider } from "../Contexts/ViewPort";
import React from "react";


const Footer = () => {

    const {view , handleWidth} = useContext(ViewPortProvider)


    return (
        <React.Fragment>
            {
             view <= 1000 && 
             <footer className="footer-mobile">
            <div className="container-mobile">
                <div className="email-div">
                    <h2 className="email-div-title">See My projects at once & leave here your e-mail address</h2>
                    <div className="input-form">
                        <input placeholder="Email Address"/>
                        <button className="submit">
                            submit
                        </button>
                    </div>
                </div>
                <div className="footer-content">
                    
                    <a href="#" className="footer-logo">AHMED WAEL</a>

                    <div className="links-copyrights">

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/%E2%80%AAahmed-wael%E2%80%AC%E2%80%8F-8899b1273" target="blank"><FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="#" target="blank"><FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#" target="blank"><FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                        <p className="copyrights">--copyrights 2025-- All rights reserved here by ahmed wael abu el-Wafa</p>
                    </div>
                </div>
            </div>
            </footer>
            }

            { 
            view > 1000 && 
             <footer className="footer-desktop">
            <div className="container-desktop">
                <div className="email-div">
                    <h2 className="email-div-title">See My projects at once & leave here your e-mail address</h2>
                    <div className="input-form">
                        <input placeholder="Email Address"/>
                        <button className="submit">
                            submit
                        </button>
                    </div>
                </div>
                <div className="footer-content">
                    
                    <a href="#" className="footer-logo">AHMED WAEL</a>

                    <div className="links-copyrights">

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/%E2%80%AAahmed-wael%E2%80%AC%E2%80%8F-8899b1273" target="blank"><FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="#" target="blank"><FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#" target="blank"><FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                        <p className="copyrights">--copyrights 2025-- All rights reserved here by ahmed wael abu el-Wafa</p>
                    </div>
                </div>
            </div>
            </footer>
            }
        
        </React.Fragment>
    );

}
export default Footer;