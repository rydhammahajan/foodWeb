import { useState , useEffect} from "react";
import { HELP_URL } from "./const";

export const useFetchHelp = (helpCategory)=>{

    const [questions , setQuestions] = useState([]) ;

    async function fetchHelpQuestions(){
        const data = await fetch(HELP_URL+ helpCategory) ; 
        const json = await data.json(); 
        setQuestions(json?.data?.issues?.data) ;
    }
    
    useEffect(()=>{ 
        fetchHelpQuestions() ; 
    }, [helpCategory]) ; 

    return questions ; 
}
