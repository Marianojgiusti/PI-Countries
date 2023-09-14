import './Card.style.css'
import { Link } from 'react-router-dom'
const Card = ({country}) =>{
const {id, name, image, continent} = country

    return ( // ver el link si va a detail o home
        <div className="card-container" key={id}>
        <Link to={`/detail/${id}`}>     
        <img className="p-img "src={image} />
        <p className='names-container'>{name}</p>
        <h3 className='names-container'> Continent: {continent}</h3>
       
        </Link>
        </div>
    ) 
    }
    
    export default Card


// VER DETAIL O HOME O NO SE QUE ONDA LOCOOOOOOO AHRE LOCOO
// ID (Código de tres letras).
// Nombre.
// Imagen de la bandera.
// Continente.
// Capital.
// Subregión (si tiene).
// Área (si tiene).
// Población.