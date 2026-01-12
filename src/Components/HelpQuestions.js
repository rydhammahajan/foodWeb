import Accordian from "./Accordian";
import { useState } from "react";


const HelpQuestions = ({helpQuestions })=>{

    /*This is the parent component for the Accordian Logic 
    Here will have that logic , one open , rest close 

    */

    const [indexOpen , setIndexOpen] = useState(-1) ; 

    return (
        <div className="help-questions-container col-11">
            {helpQuestions.map((question , index )=>{
                return <Accordian question = {question} key = {question.id} index = {index} indexOpen = {indexOpen} setIndexOpen = {setIndexOpen}/> 
            })}
        </div>

    )
}

export default HelpQuestions ; 
