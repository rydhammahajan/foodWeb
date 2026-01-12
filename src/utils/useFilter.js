import { useState , useEffect } from "react";

function relevanceFilter(displayRestaurants , setDisplayRestaurants){
    //sort the filtered restuarants by the id time 
    let copyRestaurants = [...displayRestaurants];
    copyRestaurants.sort((a , b)=>{
        return a.info.id - b.info.id;
    })
    setDisplayRestaurants(copyRestaurants) ; 
}


function deliveryFilter(displayRestaurants , setDisplayRestaurants){
    //sort the filtered restuarants by the delivery time 
    let copyRestaurants = [...displayRestaurants];
    copyRestaurants.sort((a , b)=>{
        return a.info.avgRating - b.info.avgRating;
    })
    setDisplayRestaurants(copyRestaurants) ; 
}

function ratingFilter(displayRestaurants , setDisplayRestaurants){
    //sort the filtered restuarants by the rating 
    let copyRestaurants = [...displayRestaurants];
    copyRestaurants.sort((a , b)=>{
        return a.info.sla.deliveryTime - b.info.sla.deliveryTime;
    })
    setDisplayRestaurants(copyRestaurants) ; 
}

function lowCostFilter(displayRestaurants , setDisplayRestaurants){
    //sort the filtered restuarants by the rating 
    let copyRestaurants = [...displayRestaurants];
    copyRestaurants.sort((a , b)=>{
        return a.info.costForTwo.split(" ")[0].substring(1) - b.info.costForTwo.split(" ")[0].substring(1);
    })
    setDisplayRestaurants(copyRestaurants) ; 
}

function highCostFilter(displayRestaurants , setDisplayRestaurants){
    //sort the filtered restuarants by the rating 
    let copyRestaurants = [...displayRestaurants];
    copyRestaurants.sort((a , b)=>{
        return b.info.costForTwo.split(" ")[0].substring(1) - a.info.costForTwo.split(" ")[0].substring(1);;
    })
    setDisplayRestaurants(copyRestaurants) ; 
}

const clearFilter = (actualRestaurants , setDisplayRestaurants)=>{
    const filters = Array.from(document.getElementsByClassName("filter")) ; 
    filters.forEach(filter => {
        filter.classList.remove("orange-text") ;
        filter.classList.remove("orange-border-bottom") ;
    });
    setDisplayRestaurants(actualRestaurants) ; 
}


export const useFilter = (actualRestaurants , displayRestaurants ,  setDisplayRestaurants ,filter)=>{

    //Restaurnt list logic 

    useEffect(()=>{
        if(filter == "relevance"){
            relevanceFilter(displayRestaurants ,  setDisplayRestaurants) ; 
        }else if(filter == "delivery"){
            deliveryFilter(displayRestaurants ,  setDisplayRestaurants) ; 
        }else if(filter == "rating"){
            ratingFilter(displayRestaurants ,  setDisplayRestaurants) ; 
        }else if(filter == "lowCost"){
            lowCostFilter(displayRestaurants ,  setDisplayRestaurants) ; 
        }else if(filter == "highCost"){
            highCostFilter(displayRestaurants ,  setDisplayRestaurants) ;
        }else if(filter == "clear"){
            clearFilter(actualRestaurants ,  setDisplayRestaurants) ; 
        }
    } , [filter]) ; 
}
