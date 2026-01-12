import { useContext } from "react";
import cartContext from "../Context/cartContext";
import CartButton from "./CartButton";
import { IMG_CDN_URL } from "../utils/const";
// import CartButton from "./CartButton";

const CartItems = ()=>{

    const {cartItems} = useContext(cartContext) ; 
    const items = Object.values(cartItems); 
    return (

        <div className="col-11 col-lg-5  col-5 p-lg-5 d-flex flex-column gap-3">

       { items.map((item , index)=>{

            return (
                <div key = {index} className="d-flex col-12 justify-content-between px-4 box-shadow-effect">

                    <div className="d-flex flex-column col-7 col-lg-6">
                        <div className="fs-5 fw-bold">{item.name}</div>
                        <div>Price : Rs.{item.price/100}</div>
                        <div>Total Price : Rs.{item.price/100*item.count}</div>
                    </div>
                    <div className="d-flex flex-column col-5 col-lg-6  align-items-end gap-2 py-2">
                    {item.imageId != undefined ? <img src ={IMG_CDN_URL+item.imageId} className="rounded col-10 col-md-5" ></img> : <></>}
                    <CartButton id = {item.id} name = {item.name} imageId = {item.imageId} price = {item.price} />
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default CartItems ; 
