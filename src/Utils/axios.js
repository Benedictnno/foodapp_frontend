import axios from "axios";

   
const customUrl = axios.create({
  baseURL: "https://storefood-api.onrender.com",
});

export default customUrl 