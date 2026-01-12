import { useState } from "react";
import { useParams } from "react-router";
import { useFetchRestaurantMenu } from "../utils/useFetchRestaurantmenu";
import { IMG_CDN_URL } from "../utils/const";
import MenuItem from "./MenuItem";
import MenuShimmer from "./MenuShimmer";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = ()=>{

    const[showCategoryIndex , setShowCategoryIndex] = useState(0) ; 
    const {resId} = useParams() ; 
    const menu = useFetchRestaurantMenu(resId) ;
    const menuCategory = menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>{
        return category?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    }) ;


    if(menu.length == 0) {
        return <MenuShimmer/>
    }
    const {name , cloudinaryImageId , avgRating , costForTwoMessage , sla:{minDeliveryTime , maxDeliveryTime}} = menu?.data?.cards[2]?.card?.card?.info;

    return (
        <div id = "menu" className="menu-container d-flex flex-column col-12 col-xl-10 align-items-center align-self-center gap-5">

            <div className="menu-label d-flex flex-column flex-sm-row gap-3 col-11 col-lg-10 px-2 py-3">
                <img className= "rounded col-5 col-sm-3" src = {IMG_CDN_URL+cloudinaryImageId}></img>
                <div className="restaurant-details d-flex flex-column justify-content-around">
                <div className="fs-1">
                    {name}
                </div>
                <div className="d-flex gap-4">
                    <div className="d-flex align-items-baseline gap-1">
                        <i className ="fa-solid fa-star"></i>
                        {avgRating}
                    </div>
                    <div>|</div>
                    <div>
                        {minDeliveryTime}-{maxDeliveryTime} MINS
                    </div>
                    <div>|</div>
                    <div>
                        {costForTwoMessage}
                    </div>
                </div>
                </div>
            </div>

            <div className="category d-flex flex-column col-11 col-xl-10 gap-5 ">
            {menuCategory.map((category , index)=>{  
               return (<div key = {index}>
                    <div className="col-12 d-flex justify-content-between fs-6 p-3 box-shadow-effect pointer">
                        <div className=" fw-bold ">{category?.card?.card?.title} ({category?.card?.card?.title?.length})</div>
                        <i className="fa-solid fa-angle-down" onClick={()=>{
                            showCategoryIndex == index ? setShowCategoryIndex(-1) :
                            setShowCategoryIndex(index) ; 
                        }}></i>
                    </div>
                    <MenuCategory  key = {index} category={category} index = {index} showCategoryIndex = {showCategoryIndex}/>
                    
                </div>
               )
            })}
            </div>
        </div>
    )

}

export default RestaurantMenu ; 