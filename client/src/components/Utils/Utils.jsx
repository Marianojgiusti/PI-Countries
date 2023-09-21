import React from 'react'
import "./Utils.style.css"



export const OrderPoblation = (props) => {
    return (
      <div>
       <label> Orden Por poblacion </label>
          <select onChange={(e)=> props.sortCountry(e)}>
               <option value="All">Todos</option>
               <option value="Asc">Menor</option>
               <option value="Desc">Mayor</option>
          </select>
      </div>
    )
  }
  
export  const SortAlph =(props) => {
  return (
    <div>
        <label >Ordenar alfabeticamente</label>
        <select onChange={(e) => props.handlerSortAlph(e)}>
            <option value="All">All</option>
            <option value="Asc">A - z</option>
            <option value="Desc">Z - a</option>
        </select>

    </div>
  )
};

export  const FilterActivity = (props) =>{
    return (
        <div>
            <label> Orden Por Actividad </label>
           { (!props.allActivities )
           ? <p> no se han creado</p>
           :<select onChange={(e) => props.handlerFilterActivity(e)}>
                    <option value="All">All</option>
                    {props.allActivities.map(e => (
                    <option value={e.name} key={e.name}> {e.name}  </option> ))
                    }
                </select>
            }
        </div>
    )
};


export const Paginado = ({ countriesPerPage, countries, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(countries / countriesPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
      };
    return (
        <nav className='paginado'>
            <div >
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <button 
                        className={`number ${pageNumber === currentPage ? 'selected' : ''}`}
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)} >
                        {pageNumber}
                    </button>
                ))}
                
           
            </div>
        </nav>
    );
};


export  const FilterCountry = (props) => {
    return (
      <div>
        <label className='filtrarContienent'> Filtra por continente: </label>
             <select onChange={(e) => props.handlerFilterContinent(e)}>
                      <option value="All">All</option>
                      <option value="Africa">Africa</option>
                      <option value="North America">North America</option>
                      <option value="South America">South America</option>
                      <option value="Asia">Asia</option>
                      <option value="Europe">Europe</option>
                      <option value="Oceania">Oceania</option>
                      
              </select>
      </div>
    )
  }


