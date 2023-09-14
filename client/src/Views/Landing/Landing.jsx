import {Link} from "react-router-dom"
const Landing = () =>{
    return(
        <div className="landingcontainer">
        <h1>The proyect Individual Henry</h1>
        <Link to="/home"> <button> Countries in the World! </button></Link>
        </div>
    )
}

export default Landing