import {Link} from "react-router"
const NavBar = ({setVerticalNavBarOpen})=>{


    const itemClickHandler = ()=>{
        if(setVerticalNavBarOpen) {
            setVerticalNavBarOpen(false) ; 
        }
    }

    return (
        <ul className="justify-content-between ">
            <li onClick={()=> {
                itemClickHandler() ;
            }}><Link to = "/"><i className="fa-solid fa-house px-2 "></i>Home</Link></li>
            <li onClick={()=> {
                itemClickHandler() ;
            }}><Link to = "/restaurant"><i className="fa-solid fa-utensils px-2"></i>Restaurant</Link></li>
            <li onClick={()=> {
                itemClickHandler() ;
            }}><Link to = "/help"><i className="fa-solid fa-circle-question px-2"></i>Help</Link></li>
            <li onClick={()=> {
                itemClickHandler() ;
            }}><Link to = "/cart"><i className="fa-solid fa-cart-shopping px-2"></i>Cart</Link></li>
        </ul>
    )
}

export default NavBar ; 
