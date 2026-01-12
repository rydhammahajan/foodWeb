import React, { useState } from "react";
import ReactDOM from "react-dom/client" ;
import { createBrowserRouter , RouterProvider , Outlet} from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Help from "./Components/Help";
import RestaurantMenu from "./Components/RestaurantMenu";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import cartContext from "./Context/cartContext";
import locationContext from "./Context/locationContext";
import ErrorPage from "./Components/ErrorPage";
import { useFetchLocation } from "./utils/useFetchLocation";

//Get the root container as everything in react happens inside root

const AppLayout = ()=>{

    const [cartItems , setCartItems] = useState({}) ;
    const location = useFetchLocation();

    const addItem = ({id , name , imageId , price})=>{
        if(cartItems[id] != undefined) {
            incrementItem(id) ; 
        }else{
            setCartItems({
                ...cartItems , 
                [id] : {
                    id , 
                    name , imageId , price ,
                    count : 1 
                }
            })
        }
    }
    const removeItem = ({id})=>{
        if(!cartItems[id]) return ; 
        if(cartItems[id].count > 1) {
            decrementItem(id) ; 
        }else{
            const temp = {...cartItems} ; 
            delete temp[id] ; 
            setCartItems(temp) ; 
        } 
    }
    const incrementItem = (id)=>{
        const temp = {...cartItems} ; 
        temp[id].count++ ; 
        setCartItems(temp) ; 
    }
    const decrementItem = (id)=>{
        const temp = {...cartItems} ; 
        temp[id].count-- ; 
        setCartItems(temp) ; 
    }
    const clearCart = ()=>{
        setCartItems({}) ; 
    }

    return (
    <div className="d-flex flex-column gap-5">
    <locationContext.Provider value = {{location}}>
    <cartContext.Provider value ={{cartItems , setCartItems , addItem , removeItem , incrementItem , decrementItem , clearCart}}>
        <Header/>
        <Outlet/>
        <Footer/>
    </cartContext.Provider>
    </locationContext.Provider>
    </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/" , 
        element : <AppLayout/>, 
        children : [
            {
                path : "/", 
                element : <Home/>

            } ,
            {
                path : "/restaurant", 
                element : <Body/>

            } ,
            {
                path : "restaurant/:resId", 
                element : <RestaurantMenu/>

            } ,
            {
                path : "help", 
                element : <Help/>

            },
            {
                path : "cart", 
                element : <Cart/>

            } 
        ],
        errorElement : <ErrorPage/>
    }
]); 
const root = ReactDOM.createRoot(document.getElementById("root")) ; 
root.render(<RouterProvider router={appRouter}/>) ; 
