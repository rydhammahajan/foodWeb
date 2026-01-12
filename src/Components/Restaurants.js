import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Restaurants = ({actualRestaurants , displayRestaurants , setDisplayRestaurants})=>{

    //Need to display the restaurants on the screen 
    return (
       actualRestaurants.length === 0 ? <Shimmer/> : 

       displayRestaurants.length === 0  ? (

        <div className="col-12 d-flex flex-column align-items-center gap-3">
            <div className="fs-5 orange-text ">Oops😞 ! No Such Restaurant Available</div>
            <button className="orange-background px-4 py-2 text-white rounded-pill search-button" onClick = {(e)=>setDisplayRestaurants(actualRestaurants)
            }>Go Back</button>
        </div>

        ):
        (<div className="restaurantContainer container col-12 col-xl-10  px-3 d-flex flex-wrap justify-content-start gap-5 my-5 ">
        
            {displayRestaurants.map((single_restaurant)=>{
                return <RestaurantCard single_restaurant = {single_restaurant} key = {single_restaurant.info.id} />
            })}
        </div>)
        
    )
}

export default Restaurants ; 
