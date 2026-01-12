import error from "../images/error.jpeg"
import { Link } from "react-router";
const ErrorPage = ()=>{

    return (
        <div id = "error" className="d-flex flex-column  gap-5 justify-content-center align-items-center border ">
            <img src = {error} className="error-image"></img>

            <Link to = "/">
                <button className="px-5 py-3 orange-background text-light rounded fs-4">Go Back</button>
            </Link>
        </div> 
    )
}

export default ErrorPage ; 
