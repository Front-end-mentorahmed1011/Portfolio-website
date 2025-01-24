import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Skills = () => {
    const Responsive = {
        Laptops : {
            breakpoint: { max : 4000 , min: 1200},
            items : 3
        },
        mobiles : {
            breakpoint: { max : 1200 , min: 0},
            items : 2
        }
    }
    return (
        <section className="skills-section" id="skills">

            <div className="container">
                <h2>Skills</h2>
                <p>Here are my skills as a web developer</p>
                
                <Carousel responsive={Responsive} infinite={true} className="carousel">
                    <div className="item">
                    <div className="item-percent">
                            <h5>95%</h5>
                        </div>
                        <p className="item-body">React Framework</p>
                    </div>
                    <div className="item">
                    <div className="item-percent">
                            <h5>95%</h5>
                        </div>
                        <p className="item-body">Express Js</p>
                    </div>
                    <div className="item">
                    <div className="item-percent">
                            <h5>95%</h5>
                        </div>
                        <p className="item-body">Bootstrap 5</p>
                    </div>
                    <div className="item">
                    <div className="item-percent">
                            <h5>95%</h5>
                        </div>
                        <p className="item-body">Node Js</p>
                    </div>
                    <div className="item">
                    <div className="item-percent">
                            <h5>95%</h5>
                        </div>
                        <p className="item-body">Business Analyst</p>
                    </div>
                </Carousel>
                
            </div>

        </section>
    )
}

export default Skills;