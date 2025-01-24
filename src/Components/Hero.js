import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactTyped } from "react-typed";
import profileImage from "../Assets/ProfileImage.png"
function Hero(){

    

    return (
    <section className="hero">
        
        <div className="content-section">
            <h3>
                Welcome All in my profile
            </h3>
            <h2>
                Hi! I'm ahmed wael Abu El-Wafa, junior{" "}
                 <ReactTyped 
                 strings={[
                    "React.Js FrontEnd Developer.",
                    "Node.Js BackEnd Developer.",
                    "MERN FullStack Developer."
                 ]}
                 typeSpeed={400}
                 backSpeed={40}
                 backDelay={1000}
                 loop
                 />
            </h2>
            <span className="note-span">Hello Everyone, I have 1 Year of experiance in Web Development.</span>
            <a href="https://www.linkedin.com/in/%E2%80%AAahmed-wael%E2%80%AC%E2%80%8F-8899b1273" target="blank">let's connect <FontAwesomeIcon icon={faCircleArrowRight} /></a>
        </div>
        <div className="profile">
            <img src={profileImage} alt="Ahmed Wael"></img>
        </div>
    </section>
    )
}
export default Hero;