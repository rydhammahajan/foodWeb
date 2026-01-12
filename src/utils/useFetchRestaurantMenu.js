import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./const";

export const useFetchRestaurantMenu = (id)=>{
    //our hook will mainly fetch data from the api and return it to Restaurant Menu Component

    const [restaurantMenu , setRestaurantMenu] = useState([]) ; 

    async function fetchRestaurantMenu(){
        const data = await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat={location.latitude}&lng={location.longitude}&submitAction=ENTER&restaurantId=`+id) ; 
        const json = await data.json() ;
        setRestaurantMenu(json) ;
    }

    useEffect(()=>{
        fetchRestaurantMenu() ; 
    } , [id]) ;

    return restaurantMenu ; 
}

