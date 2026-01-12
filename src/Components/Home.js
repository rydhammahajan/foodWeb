import homeImage from "../images/home.jpeg"
import instafood1 from "../images/instafood1.jpg" ; 
import instafood2 from "../images/instafood2.jpg" ; 
import instafood3 from "../images/instafood3.jpg" ; 
import instafood4 from "../images/instafood4.jpg" ; 
import instafood5 from "../images/instafood5.jpg" ; 
import instafood6 from "../images/instafood6.jpg" ; 
import instafood7 from "../images/instafood7.jpg" ; 
import { Link } from "react-router";
const Home = ()=>{

    return (
        <div id = "home" className="col-12">

        <div className="home-scroll-wrapper">

            <div className = "front-image">

                <img src = {homeImage}></img>
                <div className=" d-flex flex-column gap-1 gap-sm-3 fw-bold home-text px-5 py-5">
                    <div className="text-white fs-3">Hey Foodie!</div>
                    <div className="text-white fs-2">Looking for</div>
                    <div className="text-white fs-1 large-font ">Delicious Food ?</div>
                    <Link to = "/restaurant">
                    <button className="orange-background text-white  px-4 py-3 fs-4 rounded-pill">Explore Now</button>
                    </Link>
                </div>
            </div>
        </div>
            <div className = "famous-restaurants">
            </div>
            <div className = "instagram-image col-12 d-flex flex-column py-4">

                <div className="fs-1 italic-font">#Flavour Finders in Instagram</div>

                <div className="p-5 p-md-3 d-flex flex-column flex-sm-row flex-wrap gap-5 justify-content-around col-12 ">
                    <img src = {instafood1}  ></img>
                    <img src = {instafood2}  ></img>
                    <img src = {instafood3}  ></img>
                    <img src = {instafood4}  ></img>
                    <img src = {instafood5}  ></img>
                    <img src = {instafood6}  ></img>
                    <img src = {instafood7}  ></img>
                </div>
            </div>
        </div>
    )
}

export default Home ; 
