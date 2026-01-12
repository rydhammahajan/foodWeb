import Search from "./Search";
import Restaurants from "./Restaurants";
import Filter from "./Filter";
import {useState , useEffect} from "react";
import { useFetchRestaurants } from "../utils/useFetchRestaurants";

const Body = ()=>{

    const [displayRestaurants , setDisplayRestaurants ] = useState([]) ; 
    const actualRestaurants = useFetchRestaurants() ;
    
    useEffect(() => {
      setDisplayRestaurants(actualRestaurants);
    }, [actualRestaurants]);


    return (
      <div id = "body" className="container-fluid col-12 d-flex flex-column gap-5 ">
          <Filter actualRestaurants={actualRestaurants} displayRestaurants={displayRestaurants} setDisplayRestaurants = {setDisplayRestaurants}/>
          <Search actualRestaurants={actualRestaurants} setDisplayRestaurants = {setDisplayRestaurants}/>
          <Restaurants actualRestaurants={actualRestaurants}  displayRestaurants={displayRestaurants} setDisplayRestaurants = {setDisplayRestaurants}/>
      </div>
    )

}

export default Body;
