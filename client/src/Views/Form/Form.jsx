import { useState, useEffect } from "react"
import { Link, } from "react-router-dom"
import { useDispatch , useSelector } from 'react-redux';
import NavBar from "../../components/NavBar/NavBar"
import { getActivities, postActivities, getCountries } from "../../redux/actions"

const form = () =>{
const dispatch = useDispatch()
const countries = useSelector((state) =>state.allCountries)

 const [input, setInput] = useState({
        name:"",
        duration:"",
        difficulty:"",
        season:"",
        countries:[],
    })

const changeHandler = (event) =>{
    setInput({
        ...input,
        [event.target.name]: event.target.value
      })
      setErrors(validate({
        ...input,
        [event.target.name]: event.target.value
      }))

    }

    const [errors, setErrors] = useState({
        name:"",
        duration:"",
        difficulty:"",
        season:""
    })
    function handlerSelect(e){
      setInput({
        ...input,
        countries:[...input.countries,e.target.value]
      })
    }

    function handlerSubmit(e){
      e.preventDefault();
      dispatch(postActivities(input))
      alert("Activity created!")
      setInput({
          name:"",
          difficulty:"",
          duration:"",
          season:"",
          countries:[]
      })
    }
  
    useEffect(()=> {
      dispatch(getActivities())
    },[]);
  
    useEffect(()=> {
      dispatch(getCountries())
    },[]);
  


    function validate(input){
        let errors = {};
        if(!input.name){
          errors.name = 'se requiere un name';
        }else if(/[^A-Za-z]+/g.test(input.name)){
          errors.name = 'El name solo puede tener letras'
        }else if(!input.difficulty){
          errors.difficulty = 'Debe ingresar difficulty';
        }else if(input.difficulty <= 0 || input.difficulty >5 || (/[^0-9]+/g.test(input.difficulty))){
          errors.difficulty = 'Tiene que ser un número del 1 al 5'
        }else if(!input.duration){
          errors.duration = 'Debe ingresar duration.'
        }else if(/[^0-9]+/g.test(input.duration)){
          errors.duration = 'Debe ser solo numeros'
        }else if(input.duration <= 0 || input.duration > 24){
          errors.duration = 'Debe ser entre 1 y 24'
        }else if(!input.season){
          errors.season = 'Debe ingresar alguna season'
        } else if(!input.countries){
          errors.countries = "Debe ingresar algun pais"
        }
      
        return errors;
      }
        

        

    return(
        <div>
        <NavBar></NavBar>
        <form onSubmit={(e)=>handlerSubmit(e)}>
        <div>
        <label >Name: </label>
        <input placeholder="ingresar name" type="text" value={input.name} onChange={changeHandler} name="name" ></input>
        {errors.name && <span>{errors.name}</span>}
        </div>
         <div>
        <label>Difficulty: </label>
        <input placeholder="ingresar difficulty" type="text" value={input.difficulty} onChange={changeHandler} name="difficulty"></input>
        {errors.difficulty && <span>{errors.difficulty}</span>}
        </div>
        <div>
        <label>Duration: </label>
        <input placeholder="ingresar duration" type="text" value={input.duration} onChange={changeHandler} name="duration"></input>
        {errors.duration && <span>{errors.duration}</span>}
        </div>
        <div>
        <label>Season: </label>
        <select  type="text" value={input.season} onChange={changeHandler} name="season">
        <option value='---'>Seleccionar Temporada</option>
            <option value='Summer'>Summer</option>
            <option value='Winter'>Winter</option>
            <option value='Autumn'>Autumn</option>
            <option value='Spring'>Spring</option>
            </select>
        {errors.season && <span>{errors.season}</span>}
        </div>
        <div>
        <label> Countries:
        <select value={input.countries} onChange={(e) => handlerSelect(e)}>
            {countries?.map((n) =>(
              <option key={n.id}>{n.name}</option>
            ))}
          </select>
          <ul > Countries Selected: <li>{input.countries.map(el => el + ', ')}</li></ul>
        </label>
        {errors.countries && <span>{errors.countries}</span>}
        </div>
          <div>
          {errors.name || errors.difficulty || errors.duration || errors.season || errors.countries ? null : <button type="submit" >Agregar</button>}
          </div>
        </form>
        </div>
    )
}

export default form