/**
 * Components at the end of the day are nothing but the Javascript Functions returning JSX
 */
import foodLogo from '../images/foodLogo.png';
const Header = ()=>{

    // console.log(foodLogo) ;
    console.log("Logo:", foodLogo, typeof foodLogo);
    return(
    <section id = "header">

        <div className = "container-fluid col-12 d-flex justify-content-between align-items-baseline">
            <div className="logo-container border">

                <img src= {foodLogo} alt="logo" />

            </div>

            <div className="nav-bar col-6 ">
                <ul className="d-flex justify-content-between border">
                    <li><a><i className="fa-solid fa-house px-2 "></i>Home</a></li>
                    <li><a><i className="fa-solid fa-utensils px-2"></i>Restaurant</a></li>
                    <li><a><i className="fa-solid fa-circle-question px-2"></i>Help</a></li>
                    <li><a><i className="fa-solid fa-cart-shopping px-2"></i>Cart</a></li>
                </ul>
            </div>
        </div>
    </section>

    )



}

export default Header ; 
