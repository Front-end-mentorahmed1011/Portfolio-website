import { createContext, useState } from "react";

export const ViewPortProvider = createContext()

function ViewProvider({children}){

    const [view , setView] = useState(window.innerWidth)
    
    function handleWidth(){
        window.addEventListener('resize' , ()=> {
            setView(window.innerWidth)
        })
    }
    const [screenHeight , setScreenHeight] = useState(window.screenY)
    
    function handleHeight(){
        window.addEventListener('scroll' , ()=> {
            setScreenHeight(window.screenY)
        })
    }

    return (
        <ViewPortProvider value={{view , handleWidth , screenHeight , handleHeight}}>{children}</ViewPortProvider>
    )
}

export default ViewProvider