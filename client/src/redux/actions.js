import axios from "axios";
export const GET_COUNTRIES="GET_COUNTRIES";
export const GET_BY_ID= "GET_BY_ID"; 
export const SEARCH_BY_NAME= "SEARCH_BY_NAME"; 
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const SORT_COUNTRIES_BY_NAME = 'SORT_COUNTRIES_BY_NAME';
export const SORT_COUNTRIES_BY_POPULATION = 'SORT_COUNTRIES_BY_POPULATION';
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const POST_ACTIVITY = "POST_ACTIVITY"

export const getCountries = () => {
    return async function (dispatch) {
      const apiData= await axios.get("http://localhost:3001/countries");
      const countries = apiData.data;
      dispatch({ type: GET_COUNTRIES, payload: countries });
      ;
    };
  };

export function getActivities () {

    return async function(dispatch){
      const apiData = await axios.get("http://localhost:3001/activities");
      const activities = apiData.data;
      return dispatch({
          type: GET_ACTIVITIES,
          payload:activities.data,
      })
        
        }
}

export const postActivity = (payload) =>
    async (dispatch) => {
        try {
            const res = await axios
                .post("http://localhost:3001/activities", payload);
            dispatch({ type: POST_ACTIVITY, payload: res.data });
        } catch (error) {
            console.error('Error postting activity:', error);
        }
    };
  
export const getCountry = (ID) => {
    return async function (dispatch) {
      const apiData = await axios.get(`localhost:3001/countries/${ID}`);
      const country = apiData.data;
      dispatch({type:GET_BY_ID, payload:country})
      ;
    };
};

export const buscarPorNombre = (name)=>{
  return async function (dispatch){
    const apiData = await axios.get(`/countries?name=${name}`);
    const country = apiData.data;
    return dispatch({ type: SEARCH_BY_NAME, payload: country });
  }
}

export const filterByContinent = (continent) => ({
  type: FILTER_BY_CONTINENT,
  payload: continent,
});

export const searchCountries = (query) => ({
  type: SEARCH_COUNTRIES,
  payload: query,
});

export const sortCountriesByName = (order) => ({
  type: SORT_COUNTRIES_BY_NAME,
  payload: { order }
});

export const sortCountriesByPopulation = (order) => ({
  type: SORT_COUNTRIES_BY_POPULATION,
  payload: { order }
});

export const setCurrentPage = (page) => ({
  type: 'SET_CURRENT_PAGE',
  payload: page,
});