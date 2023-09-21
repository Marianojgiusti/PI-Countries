import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import "./Detail.style.css"




const Detail = () =>{

    const { id } = useParams()
    const dispatch = useDispatch()
    const countryDetail = useSelector(state => state.countryDetail)

    useEffect(()=>{
        dispatch(getDetail(id))
    }, [dispatch, id])


    return (
        
        <div className="container">
        <h1> {countryDetail.name}</h1>
        <img className="p-img "src={countryDetail.image} alt="img not found "width="200px" heigth='200px' />
        <h3 className="names-container"> Continent: {countryDetail.continent}</h3>
        <p className="names-container"> Capital: {countryDetail.capital}</p>
        <p className="names-container"> Subregion: {countryDetail.subregion}</p>
        <p className="names-container"> Area: {countryDetail.area}</p>
        <p className="names-container"> Population: {countryDetail.population}</p>
        <div>
      <h2 className="names-container">Actividades:</h2>
      {countryDetail.activities ? (
      <ul>
        {countryDetail.activities?.map((prop, id) => (
          <li className="names-container" key= {id}>
            Activity: {prop.name}, Difficulty: {prop.difficulty}, Duration: {prop.duration}, Season: {prop.season},                  
          </li>
        ))}
      </ul>
      ) : (
    <p>No hay actividades creadas.</p>
  )}
    </div>
        <Link to='/home'>
         <button type="text">Go Back Home</button>
         </Link>
         </div>
        
    )
}


export default Detail