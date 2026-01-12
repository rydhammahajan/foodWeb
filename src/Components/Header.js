/**
 * Components at the end of the day are nothing but the Javascript Functions returning JSX
 */
import { useState } from "react";
import foodLogo from "../images/foodLogo.png";
import NavBar from "./NavBar";

const Header = ()=>{

    const [verticalNavBarOpen , setVerticalNavBarOpen] = useState(false) ; 
    return(
    <section id = "header">

        <div className = "header-container container-fluid col-12 justify-content-between align-items-baseline px-5 box-shadow-effect">
            <div className="logo-container">
                <img src= {foodLogo} alt="logo" />
            </div>
            <div className="nav-bar d-none d-lg-block col-6 ">
                <NavBar/>
            </div>

            <div className="bar-icon d-lg-none">
                    <i className ="fa-solid fa-bars orange-text" 
                    onClick = {()=>{
                        verticalNavBarOpen ? setVerticalNavBarOpen(false) : setVerticalNavBarOpen(true) ; 
                    }} 
                    ></i>
            </div>
        </div>

        {verticalNavBarOpen ? (<div className="nav-bar-vertical py-4 " ><NavBar setVerticalNavBarOpen = {setVerticalNavBarOpen}/>
        </div>) : <></>
        }
    </section>

    )
}

export default Header ; 
