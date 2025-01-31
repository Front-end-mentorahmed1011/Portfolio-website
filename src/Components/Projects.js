import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import E_Commerce_2 from "../Assets/Projects/E-commerce SEF.png"
import Notes from "../Assets/Projects/Notes.png"
import Form from "../Assets/Projects/Form.png"
import tailwind from "../Assets/Projects/Tailwind-project.png"
const Projects = () => {

    const [count , setCount] = useState(1)

    

    useEffect((e) => {

    } , [])


    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">

                <h2>My Work</h2>

                <p className="projects-body">Works i have done in my journey for learning web development</p>

                <div className="navigators">
                    <div className={`nav-Items ${count === 1 ? "active" : ""}`} onClick={() => setCount(1)}><h4>Projects</h4></div>
                    <div className={`nav-Items ${count === 2 ? "active" : ""}`} onClick={() => setCount(2)}><h4>About Me</h4></div>
                    <div className={`nav-Items ${count === 3 ? "active" : ""}`}onClick={() => setCount(3)}><h4>USP</h4></div>

                </div>
                {count === 1 && 
                    <div className="project-wrapper">

                        <div className="card">
                            <div className="card-data">
                                <img src={E_Commerce_2} alt="website 2"/>
                            </div>
                            <div className="card-overlay">
                                <h3>E-Commmerce Website</h3>
                                <a href="https://front-end-mentorahmed1011.github.io/E-commerce-SEF-Project/">Click to review</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-data">
                                <img src={Notes} alt="website 2"/>
                            </div>
                            <div className="card-overlay">
                                <h3>Note Cards Application</h3>
                                <a href="https://front-end-mentorahmed1011.github.io/Card-notes/">Click to review</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-data">
                                <img src={Form} alt="website 2"/>
                            </div>
                            <div className="card-overlay">
                                <h3>Simple Form Validator</h3>
                                <a href="https://front-end-mentorahmed1011.github.io/FormRepo/">Click to review</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-data">
                                <img src={tailwind} alt="tail 2"/>
                            </div>
                            <div className="card-overlay">
                                <h3>tailwind-React Website</h3>
                                <a href="https://front-end-mentorahmed1011.github.io/tailwind-demo/">Click to review</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-data">
                                <img src={Notes} alt="website 2"/>
                            </div>
                            <div className="card-overlay">
                                <h3>Note Cards Application</h3>
                                <a href="https://front-end-mentorahmed1011.github.io/Card-notes/">Click to review</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-data">
                                <img src={Form} alt="website 2"/>
                            </div>
                            <div className="card-overlay">
                                <h3>Simple Form Validator</h3>
                                <a href="https://front-end-mentorahmed1011.github.io/FormRepo/">Click to review</a>
                            </div>
                        </div>

                    </div>
                }
                {
                    count === 2 &&
                    <p className="about-me">I’m Ahmed Wael, a 21-year-old MERN stack developer from Egypt, skilled in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I specialize in creating responsive, user-friendly interfaces and efficient back-end systems. Passionate about continuous learning, I’m expanding my expertise in data analysis and visualization to deliver comprehensive, impactful solutions.</p>
                }
                {
                    count === 3 && 
                    <p className="usp">"" Crafting cutting-edge websites that not only meet your business goals but also provide a seamless and enjoyable user experience. Elevate your digital presence with our expertise ""</p>
                }
                
                


            </div>
        </section>
    )
}
export default React.memo(Projects);