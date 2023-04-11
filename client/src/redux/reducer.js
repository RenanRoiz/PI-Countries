import { GET_COUNTRIES, ORDER_COUNTRY,ORDER_POPULATION, SEARCH_COUNTRIES,FILTER_BY_CONTINENT,FILTER_BY_ACTIVITY } from "./actions";

const initialState={
    countries: [],
    currentPage: 1,
    totalPages: 1,
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            return {...state, countries: action.payload}
        case ORDER_COUNTRY:
            let orderCountries = action.payload ==='asc' 
                ? state.countries.sort(function (a, b) {
                    if (a.name > b.name) return 1;
                    if (b.name > a.name)  return -1
                    return 0;
                        }) 
                : state.countries.sort(function (a, b) {
                        if (a.name > b.name) return -1;
                        if (b.name > a.name) return 1;
                        return 0;
                })
            return {
                ...state,
                countries: orderCountries,
            }
        case ORDER_POPULATION: {
                const orderPopulation = action.payload === 'POA' ?
                state.countries.sort(function (a, b) {
                        if (a.population > b.population) return -1;
                        if (b.population > a.population)  return 1;
                        return 0;
                }) :
                state.countries.sort(function (a, b) {
                        if (a.population > b.population) return 1;
                        if (b.population > a.population) return -1;
                        return 0;
                })
        return {
                ...state,
                population: orderPopulation
                }
                }
        case SEARCH_COUNTRIES:
      const query = action.payload.toLowerCase();
      const filteredCountries = state.countries.filter((country) => {
        return country.name.toLowerCase().includes(query);
      });
      return {
        ...state,
        countries: filteredCountries,
      };
      case FILTER_BY_CONTINENT:
      const filteredByContinent = state.countries.filter(
        (country) => country.continent === action.payload
      );
      return {
        ...state,
        countries: filteredByContinent,
      };
    case FILTER_BY_ACTIVITY:
      const filteredByActivity = state.countries.filter((country) =>
        country.activities.includes(action.payload)
      );
      return {
        ...state,
        countries: filteredByActivity,
      };
        default: 
            return{...state}
    }
}

export default rootReducer;