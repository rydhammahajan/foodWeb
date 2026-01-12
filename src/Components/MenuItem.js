import { IMG_CDN_URL } from "../utils/const";
import CartButton from "./CartButton";
const MenuItem = ({id , name , description , imageId , price})=>{

    //Lets use the React Context here 
    
    return(
        <div className="d-flex col-12  p-4 justify-content-between gap-3 ">
            <div className="d-flex flex-column gap-3 col-8 col-lg-9 border-bottom">
                <div className="fw-bold">{name}</div>
                <div className="text-justify fs-6">{description}</div>
                <div className="fw-light">Rs. {price/100}</div>
            </div>
            
            <div className="d-flex flex-column col-3 col-md-2 gap-2">
                {imageId != undefined ? <img src ={IMG_CDN_URL+imageId} className="rounded" ></img> : <></>}
                <CartButton id = {id} name = {name} imageId = {imageId} price = {price} />
            </div>
        </div>
    )
}

export default MenuItem ; 
