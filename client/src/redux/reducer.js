import { GET_COUNTRIES, ORDER_COUNTRY,ORDER_POPULATION } from "./actions";

const initialState={
    countries: []
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
        default: 
            return{...state}
    }
}

export default rootReducer;