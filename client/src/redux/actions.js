import axios from "axios";
export const GET_COUNTRIES="GET_COUNTRIES"
export const GET_BY_ID= "GET_BY_ID"


export const getCountries = () => {
    return async function (dispatch) {
      const apiData= await axios.get("https://jsonplaceholder.typicode.com/posts");
      const countries = apiData.data;
      dispatch({ type: GET_COUNTRIES, payload: countries });
      ;
    };
  };
  
  export const getCountry = (id) => {
    return async function (dispatch) {
      const apiData = await axios.get(`/countries/${id}`);
      const country = apiData.data;
      dispatch({type:GET_BY_ID, payload:country})
      ;
    };
  };