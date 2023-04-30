import axios from "axios";

export const GET_DOGS = "GET DOGS";

export const getDogs = () => {
  const endpoint = "http://localhost:3001/dogs";

  return async function (dispatch) {
    try {
      const { data } = await axios.get(endpoint);
      dispatch({
        type: GET_DOGS,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
      alert("There was an error trying to show the doggies");
    }
  };
};
