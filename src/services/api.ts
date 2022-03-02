import axios from "axios";

const baseURL = process.env.REACT_APP_URL_API;

const instance = axios.create({
  baseURL
});

export default instance;
