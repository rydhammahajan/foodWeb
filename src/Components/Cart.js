import cartImage from "../images/cart.jpeg"
import cartContext from "../Context/cartContext";
import { useContext } from "react";
import CartItems from "./CartItems";
import { Link } from "react-router";

const Cart = ()=>{

    const {cartItems , clearCart} = useContext(cartContext) ;

    const calculateAmount = ()=>{
        let amount = 0 ; 
        for(let key in cartItems) {
            amount += cartItems[key].count *cartItems[key].price 
        }
        return amount/100  ; 
    }

    return (

        <div id = "cart" className="col-12 d-flex flex-column"> 

            <div className="cart-header d-flex justify-content-between p-3 orange-background text-white">
                <div className="fs-3">
                    Cart Items <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div>
                    <button className="clear-cart px-3 py-2 orange-text fw-bold" onClick={()=>{
                        clearCart() ; 
                    }}>Clear Cart</button>
                </div>
            </div>

            <div className="cart-body col-12 p-5">
                {!cartItems || Object.keys(cartItems).length == 0 ? 
                (<div className="d-flex justify-content-center cart-image-wrapper col-12 ">
                <img src={cartImage}></img>
                </div>) : 
                (<div className="d-flex flex-column-reverse flex-lg-row col-12 justify-content-between align-items-center
                align-items-lg-start gap-3 ">   
                    <CartItems/>
                    <div className="d-flex flex-column col-11 col-lg-5 align-items-center  gap-3 box-shadow-effect py-5 ">
                        <div className="fs-4 fw-bold">Want to Add more</div>
                        <Link to = "/restaurant"><button className="px-3 py-2 orange-background rounded text-light">Add more</button></Link>
                        <div className="fs-4 border-bottom px-5 ">Payment Info<i className="fa-solid fa-coins orange-text ps-2 "></i></div>
                        <div className="fs-5 fw-light">Amount to be paid Rs.  {calculateAmount()}</div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Cart ; 
