import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import  {getCountries, getActivities, filterCountryByContinent, filterActivity, sortCountryPob}  from "../../redux/actions"
import NavBar from "../../components/NavBar/NavBar"
import {SearchBar} from "../../components/SearchBar/SearchBar"
import { FilterActivity, FilterCountry, Paginado, OrderPoblation } from "../../components/Utils/Utils"
import "./Home.style.css"


const Home = () =>{
  const dispatch = useDispatch();

  const allCountries = useSelector((state)=> state.allCountries)
  const allActivities = useSelector((state) => state.allActivities)

  const [currentPage, setCurrentPage] = useState(1);

  const countriesPerPage = 10;

  const [option , setOption] = useState('')


  function handlerClick(e){
    e.preventDefault();
    dispatch(getCountries());
}
  useEffect(()=>{
    dispatch(getCountries());
    //return (() => {clearDetail()})
  },[dispatch])

  useEffect (() => {
    dispatch(getActivities())
},[dispatch])

const sortCountry = (e) =>{
  dispatch(sortCountryPob(e.target.value))
  setOption(e.target.value)
  setCurrentPage(1)
}
let indexOfLastCountry;
let indexOfFirstCountry;
    if (currentPage === 1){
        indexOfLastCountry = 9;
        indexOfFirstCountry = 0
        
    }else{
      indexOfFirstCountry = ((currentPage - 1) * 10) - 1
      indexOfLastCountry = ((currentPage - 1) * 10) + 9
    }
    // indexOfLastCountry = currentPage * countriesPerPage; //20
    // indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //10
    const currentCountries = allCountries.slice(
      indexOfFirstCountry,
      indexOfLastCountry
    );
 
    const pages = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

const handlerFilterContinent = (e) =>{
  dispatch(filterCountryByContinent(e.target.value))
}

const handlerFilterActivity = (e) =>{
  e.preventDefault()
  dispatch(filterActivity(e.target.value))
  setOption(e.target.value)
  setCurrentPage(1)
  console.log('filterCountriesAct '+e.target.value)
}



return(
  <div className="homecontainer">
        <h1 className="namecontainer">Welcome!</h1>
        <NavBar />
        <SearchBar setCurrentPage={setCurrentPage}/>
            <button onClick={e =>{handlerClick(e)}}>
                volver a cargar todos los paises
            </button>
            <div>
                <OrderPoblation sortCountry={sortCountry}/>
                <FilterCountry handlerFilterContinent={handlerFilterContinent}/>
               <FilterActivity allActivities={allActivities} handlerFilterActivity = {handlerFilterActivity}/>
               {/* <Paginado
               countriesPerPage={countriesPerPage}
               allCountries={allCountries.length}
               pages={pages}
               /> */}
        <CardsContainer allCountries={allCountries}/>
      </div>
       </div>
    )
} 

export default Home
       //* Filtro sobre el estado
       
       // const [filtered, setFiltered] = useState(allUsers);
       // const [searchString, setSearchString] = useState("");
       // function handleSubmit(e) {
       // e.preventDefault();
       // const filtered = allUsers.filter ((user) =>
       // user.name.includes (searchString));
       //setFiltered (filtered); }