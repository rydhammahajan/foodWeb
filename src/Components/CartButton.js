import cartContext from "../Context/cartContext";
import { useContext } from "react";

const CartButton = ({id , name , imageId , price})=>{

    const {cartItems , addItem , removeItem} = useContext(cartContext) ;
    return (
        <button className="orange-background text-white d-flex justify-content-between px-2 px-md-4 align-items-baseline rounded gap-2">
            <div className="fw-bold fs-4"
            onClick = {()=>{
                addItem({id , name , imageId , price})
            }}
            >+</div>
            <div>{!cartItems || !cartItems[id] ? "Add" : cartItems[id].count}</div>
            <div className="fw-bold fs-4" onClick = {()=>{
                removeItem({id})
            }}>-</div>
        </button>
    )
}

export default CartButton ; 
