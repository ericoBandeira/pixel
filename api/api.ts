import axios from "axios";

const apiPixel = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: "https://pixeltcc.herokuapp.com/",
});

export { apiPixel };