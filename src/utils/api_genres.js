import axios from "axios";
const API_URL = "http://localhost:8888";

export const getGenres = async () => {
  try {
    const response = await axios.get(API_URL + "/genres");
    return response.data;

    // let params = {};
    // if (type === "show") {
    //   params.type = type;
    //   const queries = new URLSearchParams(params);
    //   const response = await axios.get(
    //     API_URL + "/genres?" + queries.toString()
    //   );
    //   // /genres?type=show
    //   return response.data;
    // } else {
    //   const response = await axios.get(API_URL + "/genres");
    //   return response.data;
    // }
  } catch (error) {
    console.log(error);
  }
};

export const getShowGenres = async () => {
  try {
    const response = await axios.get(API_URL + "/genres?type=shows");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
