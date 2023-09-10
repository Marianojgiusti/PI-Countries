import React from "react";
import { useDispatch } from "react-redux";
import  {getCountriesbyname}  from "../../redux/actions"
import { useState , useEffect} from 'react';


 export const SearchBar = ({setCurrentPage}) => {
 const [state,setState] = useState('')
 const dispatch = useDispatch();

    function handleInputChange(e){
        e.preventDefault();
        setState(e.target.value)
        console.log(state)
    }

    useEffect(() => {
        dispatch(getCountriesbyname(state))
        setCurrentPage(1)
        
    },[state,setCurrentPage,dispatch])
    // console.log('state')
    // console.log(state)

  return (
    <div className='serachBar'>
        <input 
        onChange={(e) => handleInputChange(e)} 
        type="text" 
        value={state} 
        placeholder='Buscar Pais...'
        />
    </div>
  )
}
