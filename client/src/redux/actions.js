import axios from "axios";


export const GET_COUNTRIES = "GET_COUNTRIES";
export const getCountries =() =>{
    return async function(dispatch){
        try{
        const allCountries = await axios.get("http://localhost:3001/countries")
          return dispatch({
            type: GET_COUNTRIES, 
            payload: allCountries.data
        });
    } catch (error){
        alert(error.message)
    }
    };
};

export const GET_BY_NAME = "GET_BY_NAME";
export const getCountriesbyname = (name) =>{
    return async function (dispatch){
        try{
        const byNameCountries = await axios.get(`http://localhost:3001/countries/?name=${name}`)
        return dispatch({
            type: GET_BY_NAME,
            payload: byNameCountries.data,
        });
    }
    catch (error) {
        alert(error.message)
    }
    }
}

export const GET_DETAIL = "GET_DETAIL";
export const getDetail = (id) => {
    return async function (dispatch) {
        try {
            const detail = await axios.get(`http://localhost:3001/countries/${id}`);
    
            return dispatch({ 
                type: GET_DETAIL, 
                payload: detail.data })

        } catch (error) {
            alert(error.message)
        }
    }
};
export const GET_ACTIVITIES = "GET_ACTIVITIES"; //para get y post
export const getActivities = () =>{
    return async function(dispatch){
        try{
            const getactis = await axios.get(`http://localhost:3001/activities`);
        return dispatch({
            type: GET_ACTIVITIES,
            payload: getactis.data
        })
    }catch (error){
        alert(error.message)
    }

    }
};

export const postActivities = (payload) =>{
    return async function (){
        try {
            const postactis = await axios.post(`http://localhost:3001/activities`, payload);
            return postactis

        }catch(error) {
            alert(error.message)
        }
        
    }
};
export const SORT_COUNTRY_POB = "SORT_COUNTRY_POB"
export const sortCountryPob =(order) =>{
    return{
        type:"SORT_COUNTRY_POB",
        payload: order
    }
};
export const SORT_COUNTRY_ALPH = "SORT_COUNTRY_ALPH" 
export const sortCountryAlph = (order)=>{
    return{
        type:"SORT_COUNTRY_ALPH",
        payload:order
    }
}

export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const filterCountryByContinent = (continent) =>{
    return(
        {
            type:"FILTER_BY_CONTINENT",
            payload: continent
        }
    )
}
export const FILTER_ACTIVITY = "FILTER_ACTIVITY"
export const filterActivity = (activities) =>{
    return{
        type: "FILTER_ACTIVITY",
        payload: activities
    }
}
