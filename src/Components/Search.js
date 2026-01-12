import { useState } from "react";

const Search = ({actualRestaurants , setDisplayRestaurants})=>{

    const [searchText , setSearchText] = useState(""); 

    return (

        <div >
            <form className="col-12 d-flex justify-content-center  flex-bas">
            <input type= "text" placeholder = "Search for restaurants , cuisine , food...." name = "search" className="searchInput col-5 rounded-pill px-4 py-2 col-8 col-sm-6 col-md-4 border" value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value)
            }}
            />
            <button className="orange-background px-4 text-white search-button rounded-pill col-3 col-sm-2 col-md-1" type="button"    onClick={(e)=>{
                //Here we will write the serach logic
                const res = actualRestaurants.filter((restaurant)=>{
                    return (restaurant?.info?.name.toLowerCase().includes(searchText) || restaurant?.info?.cuisines.join("").toLowerCase().includes(searchText))
                }); 
                setDisplayRestaurants(res) ; 
                setSearchText("") ;
            }}>Search</button>
            </form> 
        </div>
        
        
    )
}

export default Search ;
