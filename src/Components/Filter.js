import { useState , useEffect} from "react";
import {useFilter} from "../utils/useFilter" ;

const handleFilterUI = (e)=>{
    const filters = Array.from(document.getElementsByClassName("filter")) ;
    e.target.classList.add("orange-text");
    e.target.classList.add("orange-border-bottom"); 
    filters.forEach(filter => {
        if(filter != e.target){
            filter.classList.remove("orange-text") ;
            filter.classList.remove("orange-border-bottom") ;
        }
    });
}


const Filter = ({actualRestaurants , displayRestaurants , setDisplayRestaurants})=>{ 

    //state variable 
    const [filter , setFilter] = useState("") ;

    //Using custom hook 
    useFilter(actualRestaurants , displayRestaurants, setDisplayRestaurants , filter);

    return (

        <div className = "container col-12 d-flex flex-column flex-xl-row  px-4  justify-content-between align-items-baseline  filter-container gap-2">

        <h1 className="col-4">Restaurants</h1>
        <ul className="container col-12 col-xl-8 d-flex justify-content-between gap-1 filter-list  flex-wrap box-shadow-effect py-4 ">
            <li className="filter"  onClick={(e)=>{ 
                handleFilterUI(e)
                setFilter("relevance");
                }}>Relevance</li><div className="fw-light">|</div>
            <li className="filter" onClick={(e)=>{ 
                handleFilterUI(e)
                setFilter("delivery");
                }}>Delivery Time</li><div className="fw-light">|</div>

            <li className="filter" onClick={(e)=>{ 
                handleFilterUI(e)
                setFilter("rating");
                }}>Rating</li><div className="fw-light">|</div>

            <li className="filter" onClick={(e)=>{ 
                handleFilterUI(e)
                setFilter("lowCost");
                }}>Cost: Low to High</li><div className="fw-light">|</div>

            <li className="filter" onClick={(e)=>{ 
                handleFilterUI(e)
                setFilter("highCost");
                }}>Cost: High to Low</li><div className="fw-light">|</div>

            <li onClick={(e)=>{ 
                setFilter("clear");
                }} className="orange-text"><i className="fa-solid fa-filter"></i>Clear Filters</li>
        </ul>

        </div>
    )

}

export default Filter ; 
