import {GET_COUNTRIES, GET_BY_NAME, GET_DETAIL, GET_ACTIVITIES, FILTER_ACTIVITY, SORT_COUNTRY_POB, FILTER_CONTINENT} from "./actions"

let initialState = {
    allCountries:[],
    countries:[],
    countryDetail:[],
    allActivities:[],
    sortActivities:[],
    sortFiltCountries:[], 
    sortCountries:[]
}         

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {...state, allCountries: action.payload
            };
        case GET_BY_NAME:
            return {...state, allCountries:action.payload
            };
        case GET_DETAIL:
            return {...state, countryDetail:action.payload
            };
        case GET_ACTIVITIES:
            return {...state, allActivities:action.payload, sortActivities:action.payload
            };
        case FILTER_ACTIVITY:
            console.log('payloadAct: ' +action.payload)
      
            const countriesAct = state.sortCountries.filter((c) => c.Activities.length > 0);  
      
            let array = [];
      
            for (let i = 0; i < countriesAct.length; i++) {
              for (let j = 0; j < countriesAct[i].Activities.length; j++) {
                if (countriesAct[i].Activities[j].nombre === action.payload) {
                  array.push(countriesAct[i]);
                }
              }
            }
            return {
              ...state,
              countries : action.payload === 'All' ? state.sortCountries : array
            };
            case FILTER_CONTINENT:
                const allCountries2 = state.sortFiltCountries;
                let filtered;
                if(action.payload !== 'All')filtered = allCountries2.filter((c) => c.continent === action.payload)

                return {
                    ...state,
                    countries: action.payload === 'All'? allCountries2 : filtered
            };
            case SORT_COUNTRY_POB:
                return{
                    ...state,
                    countries:action.payload === 'Asc' ? state.sortFiltCountries.sort((a,b) => a.population - b.population) : state.countries.sort((a,b) => b.population - a.population)
            };
            default: return state;
            }
}

export default rootReducer