import { useState } from "react";
import help from "../images/help.jpeg"
import {useFetchHelp} from "../utils/useFetchHelp";
import HelpQuestions from "./HelpQuestions";

const Help = ()=>{
    
    const [helpCategory , setHelpCategory] = useState("");

    const [indexOpen , setIndexOpen] = useState(-1) ; 

    const helpQuestions = useFetchHelp(helpCategory) ; 
    
    return (

        <div id = "help" className="container-fluid col-12  d-flex flex-column align-items-center gap-5">
            
            <div className="col-12 help-nav d-flex flex-column px-5 py-2 ">
                <div className="fs-2 fw-bold">Help & Support</div>
                <div className="fw-bold">Let's take a step ahead and help you better</div>
            </div>

            <div className="col-12 col-md-10 d-flex p-2 p-md-5 help-container gap-3"> 

                <div className="help-category-container d-flex flex-column col-5 ">

                    <ul className="light-grey-background py-4">
                        <li className= {"px-2 px-md-5 py-2 py-md-4 fs-6 fw-bold " + (helpCategory === "partner-onboarding" ?"white-background" :"" )} onClick={()=>{
                            setHelpCategory("partner-onboarding") ; 
                        }}>Partner Onboarding</li>
                        <li className= {"px-2 px-md-5 py-2 py-md-4 fs-6 fw-bold " + (helpCategory === "legal" ?"white-background" :"" )}onClick={()=>{
                            setHelpCategory("legal") ; 
                        }}>Legal</li>
                        <li className= {"px-2 px-md-5 py-2 py-md-4 fs-6 fw-bold " + (helpCategory === "faq" ?"white-background" :"" )} onClick={()=>{
                            setHelpCategory("faq") ; 
                        }}>FAQs</li>
                        <li className= {"px-2 px-md-5 py-2 py-md-4 fs-6 fw-bold " + (helpCategory === "instamart_onboarding" ?"white-background" :"" )} onClick={()=>{
                            setHelpCategory("instamart_onboarding") ; 
                        }}>Instamart Onboarding</li>
                        <li className= {"px-2 px-md-5 py-2 py-md-4 fs-6 fw-bold " + (helpCategory === "irctc_faq" ?"white-background" :"" )} onClick={()=>{
                            setHelpCategory("irctc_faq") ; 
                        }}>IRCTC FAQ</li>
                    </ul>
                </div>

                <div className="help-questions-container  col-7 d-flex flex-column align-items-center gap-5 ">

                    {helpCategory === ""? 
                    (<>
                    <div className="fw-bolder fs-3 blue-color ">Looking for some help??
                    </div>
                    <img src={help} className="col-6 align-self-center d-flex"></img>
                    </> ): 
                    (<HelpQuestions helpQuestions = {helpQuestions}/>)}
                </div>
            </div>
        </div>
    )
}

export default Help ; 
