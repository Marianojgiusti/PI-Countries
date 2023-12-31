import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import  {getCountries, getActivities, filterCountryByContinent, filterActivity, sortCountryPob, sortCountryAlph}  from "../../redux/actions"
import {NavBar} from "../../components/NavBar/NavBar"
import {SearchBar} from "../../components/SearchBar/SearchBar"
import { FilterActivity, FilterCountry, Paginado, OrderPoblation, SortAlph } from "../../components/Utils/Utils"
import "./Home.style.css"


const Home = () =>{
  const dispatch = useDispatch();
  const countries = useSelector((state)=> state.countries)
  const allActivities = useSelector((state) => state.allActivities)

  useEffect(()=>{
    dispatch(getActivities())},[])

  function handlerClickReset(){
    setCurrentPage(1)
    dispatch(getCountries());
}
  const handlerSortAlph = (e) =>{
    setCurrentPage(1)
    dispatch(sortCountryAlph(e.target.value)) 
  }
const sortCountry = (e) =>{
  dispatch(sortCountryPob(e.target.value))
  setCurrentPage(1)
}

const [currentPage, setCurrentPage] = useState(1);
const countriesPerPage = 10;
const indexOfLastCountry = currentPage * countriesPerPage;
const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);



const handlerFilterContinent = (e) =>{
 dispatch(filterCountryByContinent(e.target.value)) 
 setCurrentPage(1)
console.log(e.target.value)
}

const handlerFilterActivity = (e) =>{
  e.preventDefault()
  dispatch(filterActivity(e.target.value))
  setCurrentPage(1)
}

return(
  <div className="homecontainer">
        <h1 className="namecontainer">Welcome!</h1>
        <NavBar />
            <button className="buttonreset" onClick={e =>{handlerClickReset(e)}}>
                Reset Countries
            </button>
            <div>
            <div className="divselectors">   
            <OrderPoblation sortCountry={sortCountry}/>
            <SortAlph handlerSortAlph={handlerSortAlph}/>
            <FilterCountry handlerFilterContinent={handlerFilterContinent}/>
            <FilterActivity allActivities={allActivities} handlerFilterActivity={handlerFilterActivity}/>
              </div>
              <div>
              <SearchBar setCurrentPage={setCurrentPage}/>
              </div>
            <CardsContainer allCountries={currentCountries} />
            <Paginado className="stylepaginado" countriesPerPage={countriesPerPage} countries={countries.length}  onPageChange={setCurrentPage} />
      </div>
       </div>
    )
} 

export default Home
 