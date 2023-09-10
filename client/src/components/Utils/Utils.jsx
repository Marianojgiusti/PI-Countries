import React from 'react'

export  const SortAlph =(props) => {
  return (
    <div>
        <label className='SortAlph'>Ordenar alfabeticamente</label>
        <select onChange={(e) => props.handlerSortCountries(e)}>
            <option value="All">Al azar</option>
            <option value="asc">Ascendentemente</option>
            <option value="desc">Descendentemente</option>
        </select>

    </div>
  )
};

export  const FilterActivity = (props) =>{
    
    return (
        <div>
            <label> Orden Por Actividad </label>
           { 
                (props.allActivities.length === 0 )?<p> no se han creado</p>:

                <select onChange={(e) => props.handlerFilterActivity(e)}>
                    <option value="All">Todos</option>
                    {
                        props.allActivities?.map(el => (
                            <option value={el.name} key={el.name}> {el.name}  </option>
                            
                        ))
                    }
                </select>
            }
        </div>
    )
};

export const Paginado =({countriesPerPage , allCountries, pages }) =>{
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil((allCountries + 1)/countriesPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul className="pages">
                { pageNumbers &&
                pageNumbers.map(number=> (
                    <li className="number" key={number}>
                        <a onClick={()=> pages(number)}>{number}</a>
                    </li>
                ))
                }
            </ul>
        </nav>
    )
};
export  const FilterCountry = (props) => {
    return (
      <div>
        <label className='filtrarContienent'> Filtra por continente: </label>
             <select onChange={(e) => props.handlerFilterContinent(e)}>
                      <option value="All">Todos</option>
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
export const OrderPoblation = (props) => {
    return (
      <div>
       <label className='OrdenPorPoblacion'> Orden Por poblacion </label>
          <select onChange={(e)=> props.sortCountry(e)}>
               <option value="All">Todos</option>
               <option value="Asc">Ascendente</option>
               <option value="Des">Descendente</option>
          </select>
      </div>
    )
  }
  
