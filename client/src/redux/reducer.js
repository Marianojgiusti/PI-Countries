import {GET_COUNTRIES, GET_BY_NAME, GET_DETAIL, GET_ACTIVITIES, FILTER_ACTIVITY, SORT_COUNTRY_POB, FILTER_BY_CONTINENT, SORT_COUNTRY_ALPH} from "./actions"

let initialState = {
    allCountries:[],
    countries:[],
    countryDetail:[],
    allActivities:[],
    sortActivities:[],
  
}         

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {...state, allCountries: action.payload, countries:action.payload
            };
        case GET_BY_NAME:
            return {...state, countries:action.payload
            };
        case GET_DETAIL:
            return {...state, countryDetail:action.payload
            };
        case GET_ACTIVITIES:
            return {...state, allActivities:action.payload, sortActivities:action.payload
            };

        case FILTER_ACTIVITY:
            if(action.payload==="All"){
                const activities= state.allCountries.filter(country =>
                    country.activities.some(activity =>
                        state.allActivities.some(allActivity =>
                                activity.name.includes(allActivity.name)
                                )
                        ));
                    return {
                    ...state,
                    countries: activities
                    };
                } else{
                    const selectedActivity = action.payload;
                    const filteredActivities = 
                        [...state.allCountries].filter(country =>
                        country.activities.some(activity => activity.name.includes(selectedActivity))
                        )
                        return {
                        ...state,
                        countries: filteredActivities,
                        };
                    }
         


            case FILTER_BY_CONTINENT:
            if(action.payload==='All' ){
                return {
                ...state,
                countries: state.countries,
                };
            } else{
                const selectedContinent = action.payload;
                const filteredCountries = 
                [...state.allCountries].filter(country =>
                    country.continent.includes(selectedContinent)
                    ); 
                    return {
                    ...state,
                    countries: filteredCountries,
                    };
                    
                }

            case SORT_COUNTRY_POB:
            const sortedPopulation = [...state.countries];
                    if(action.payload=== 'All' ){
                        return {
                        ...state,
                        countries: state.countries,
                        }}
                    else if (action.payload === 'Asc') {
                            sortedPopulation.sort((a, b) => a.population-b.population);
                    } else if (action.payload === 'Desc') {
                            sortedPopulation.sort((a, b) => b.population-a.population);
                            }
                    return {
                        ...state,
                        countries: sortedPopulation,
                    };
     

            case SORT_COUNTRY_ALPH:
                    const sortedCountries = [...state.countries];
                if(action.payload==='All' ){
                    return {
                    ...state,
                    countries: state.countries,
                    }}
                else if (action.payload === 'Asc') {
                        sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
                } else if (action.payload === 'Desc') {
                        sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
                        }
                return {
                    ...state,
                    countries: sortedCountries,
                }
            default: return state;
            }
}

export default rootReducer