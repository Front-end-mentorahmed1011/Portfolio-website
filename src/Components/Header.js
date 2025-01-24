import { useContext, useEffect, useRef, useState } from "react";
import { ViewPortProvider } from "../Contexts/ViewPort";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Header() {
    const { view, handleWidth } = useContext(ViewPortProvider);

    const [position, setPosition] = useState(window.scrollY);
    const [heightToggle, setHeightToggle] = useState(false);

    const navMenuRef = useRef(null);
    const burgerMenuRef = useRef(null);

    // handle the width, viewPort, nav background color, scroll current Position
    useEffect(() => {
        handleWidth();
        function handleScroll() {
            setPosition(window.scrollY || document.documentElement.scrollTop);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleToggle = () => {
        setHeightToggle(!heightToggle);
    };
    // handle collapse the nav Menu for better UX
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navMenuRef.current &&
                !navMenuRef.current.contains(event.target) &&
                burgerMenuRef.current &&
                !burgerMenuRef.current.contains(event.target)
            ) {
                setHeightToggle(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

    }, []);

    const navBarStyle = {
        height: heightToggle ? "190px" : "0px",
        transition: "height 0.3s",
    };

    const navBackground = {
        backgroundColor: position < 80 ? "transparent" : "#000",
    };

    return (
        <header>
            {view < 1200 && (
                <nav className="nav1">
                    <div className="static-header">
                        <a href="#" className="logo">
                            Ahmed Wael
                        </a>
                        <button
                            className="Burger-menu"
                            onClick={handleToggle}
                            ref={burgerMenuRef} // Attach the ref to the burger button
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div className="navMenu" style={navBarStyle} ref={navMenuRef}>
                        <br />
                        <div className="page-links">
                            <a href="#">Home</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                        </div>
                        <div className="external-links">
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/%E2%80%AAahmed-wael%E2%80%AC%E2%80%8F-8899b1273" target="blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="#" target="blank">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#" target="blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                            <button className="connecBtn">
                                <a href="https://www.linkedin.com/in/%E2%80%AAahmed-wael%E2%80%AC%E2%80%8F-8899b1273" target="blank">Let's connect</a>
                            </button>
                        </div>
                    </div>
                </nav>
            )}
            {view >= 1200 && (
                <nav className="nav2" style={navBackground}>
                    <div className="static-header">
                        <a href="#" className="logo">
                            AHMED WAEL
                        </a>
                    </div>
                    <div className="navMenu">
                        <div className="page-links">
                            <a href="#">Home</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                        </div>
                        <div className="external-links">
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/%E2%80%AAahmed-wael%E2%80%AC%E2%80%8F-8899b1273" target="blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="#" target="blank">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#" target="blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                            <button className="connecBtn">
                                <a href="https://www.linkedin.com/in/%E2%80%AAahmed-wael%E2%80%AC%E2%80%8F-8899b1273" target="blank">Let's connect</a>
                            </button>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;
