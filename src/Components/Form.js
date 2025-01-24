import { useContext, useEffect } from "react";
import { ViewPortProvider } from "../Contexts/ViewPort";


const Form = () => {

    const {view , handleWidth} = useContext(ViewPortProvider)

    function handleSubmit(e){
        e.preventDefault();
        alert("Data sent Successfully")
    }

    useEffect(() => {
        handleWidth()
    } ,[])
    return (
        <>
        {view <= 1000 && 
            <section className="form-mobile-section">
                <div className="container">
                <div className="form-section-mobile-image">
                {/* Image here */}
                </div>
                <h2>Get In Touch</h2>
                <form className="form-mobile" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Email Address"/>
                        <input type="tel" placeholder="Phone No."/>
                    </div>
                    <div className="form-control">
                        <textarea placeholder="Message"/>
                    </div>
                    <button type="submit" className="submit-btn">Send</button>
                </form>
                </div>
            </section>
        }
        {view > 1000 && 
            <section className="form-desktop-section">
                <div className="container">
                    <div className="form-section-desktop-image">
                    {/* Image here */}
                    </div>
                    <form className="form-desktop" onSubmit={handleSubmit} autoComplete="none">
                    <h2 className="title-form">Get In Touch</h2>
                        <div className="form-control">
                            <input type="text" placeholder="First Name"/>
                            <input type="text" placeholder="Last Name"/>
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email Address"/>
                            <input type="tel" placeholder="Phone No." maxLength={400}/>
                        </div>
                        <div className="form-control">
                            <textarea placeholder="Message"/>
                        </div>
                        <button type="submit" className="submit-btn">Send</button>
                    </form>
                </div>
            </section>
        }
        </>
    )
}

export default Form;