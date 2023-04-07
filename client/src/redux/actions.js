import axios from "axios";
export const GET_COUNTRIES="GET_COUNTRIES"

export const getCountries = () => {
    return async function (dispatch) {
      await axios.get("/countries").then((res) => {
        return dispatch({ type: GET_COUNTRIES, payload: res.data });
      });
    };
  };
  
  export const getCountry = (id) => {
    return async function (dispatch) {
      await axios.get(`/countries/${id}`).then((res) => {
        if (!res.data) {
          return dispatch({ type: "DOESNT_EXIST", payload: { name: -1 } });
        }
        return dispatch({ type: "GET_BY_ID", payload: res.data });
      });
    };
  };