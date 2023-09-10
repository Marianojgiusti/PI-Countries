import { Link } from "react-router-dom"
import "./NavBar.style.css"
const NavBar = () => {
    return (
        <div >
           <div className="containernav"> 
            <Link to="/home">Home</Link>
            <Link to="/form">Form</Link>
            </div>
        </div>
    )
}

export default NavBar;