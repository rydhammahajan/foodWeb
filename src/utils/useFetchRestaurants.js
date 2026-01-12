import { useContext, useEffect, useState } from "react"
import { RESTAURANTS_API_URL } from "../utils/const";
import locationContext from "../Context/locationContext";

export const useFetchRestaurants = ()=>{
    const [actualRestaurants , setActualRestaurants] = useState([]) ; 
    const {location} = useContext(locationContext) ;
    console.log(location.longitude) ;
    async function fetchRestaurantsData(){
        //API call 
        const data = await fetch(`https://foodfire.onrender.com/api/restaurants?lat={location.latitude}&lng={location.longitude}&page_type=DESKTOP_WEB_LISTING`) ; 
        const json = await data.json() ;
        const sorted_data = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
        console.log(sorted_data) ;
        setActualRestaurants(sorted_data) ; 
    }
    useEffect(()=>{
        fetchRestaurantsData() ; 
    },[]);
    return actualRestaurants ; 
}
