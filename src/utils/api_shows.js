//* show
import axios from "axios";

const API_URL = "http://localhost:8888";

export const getShows = async (genre, sort) => {
  // axios method
  try {
    /* 
      Our goal is to go to this url to get the filtered data
      http://localhost:5000/shows?genre=Comedy
    */
    let params = {};
    if (genre !== "all") {
      params.genre = genre;
    }
    if (sort !== "") {
      params.sort = sort;
    }
    const queries = new URLSearchParams(params);
    const response = await axios.get(API_URL + "/shows?" + queries.toString());
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getShow = async (id) => {};

export const addShow = async (data) => {};

export const updateShow = async (id, data) => {};

export const deleteShow = async (id) => {};
