import { IMG_CDN_URL } from "../utils/const";
import { Link } from "react-router";

const RestaurantCard = ({single_restaurant})=>{

    const {id , name , cloudinaryImageId , costForTwo , cuisines , avgRating , veg , sla} = single_restaurant?.info ;

    const img_url = IMG_CDN_URL + cloudinaryImageId ; 

    return (

        <Link to = {"/restaurant/"+id} className = "restaurantCard container col-xs-10 col-md-5 col-lg-4 col-xl-3  d-flex flex-column px-3 py-3 gap-2">
            <img src = {img_url}></img>

            <div className="d-flex align-items-baseline justify-content-between">
                <div className="h5 col-10 ">{name}</div>
                <i className={"fa-regular fa-square-caret-up " + (veg ? "red" : "green" )} ></i>
            </div>

            <div className="col-12 d-flex flex-wrap justify-content-start">
            {
                cuisines.map((cuisine)=> {
                    return <div key = {cuisine} className="me-2">{cuisine}</div>
                })
            }
            </div>

            <div className="col-12   justify-content-between d-flex flex-wrap">
                <div className="rating-box px-2">
                    <div className="d-flex align-items-baseline gap-1">{avgRating}<i className="fa-solid fa-star"></i></div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-baseline gap-1">{costForTwo}</div>
                </div>
                <div>
                    {sla?.slaString}
                </div>
            </div>

        </Link>
    )

}

export default RestaurantCard ; 
