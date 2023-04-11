import { GET_COUNTRIES, SEARCH_COUNTRIES,FILTER_BY_CONTINENT,FILTER_BY_ACTIVITY,SORT_COUNTRIES_BY_NAME,
  SORT_COUNTRIES_BY_POPULATION } from "./actions";

const initialState={
    countries: [],
    sortedBy: {
      name: null,
      population: null
    },
    currentPage: 1,
    totalPages: 1,
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            return {...state, countries: action.payload}
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
      case SORT_COUNTRIES_BY_NAME:
        const { order: nameOrder } = action.payload;
        const sortedByName = state.countries.slice().sort((a, b) => {
          const aName = a.name.toLowerCase();
          const bName = b.name.toLowerCase();
          if (nameOrder === 'asc') {
            return aName.localeCompare(bName);
          } else {
            return bName.localeCompare(aName);
          }
        });
        return {
          ...state,
          countries: sortedByName,
          sortedBy: {
            ...state.sortedBy,
            name: nameOrder
          }
        };
        case SORT_COUNTRIES_BY_POPULATION:
      const { order: populationOrder } = action.payload;
      const sortedByPopulation = state.countries.slice().sort((a, b) => {
        if (populationOrder === 'asc') {
          return a.population - b.population;
        } else {
          return b.population - a.population;
        }
      });
      return {
        ...state,
        countries: sortedByPopulation,
        sortedBy: {
          ...state.sortedBy,
          population: populationOrder
        }
      };
        default: 
            return{...state}
    }
}

export default rootReducer;