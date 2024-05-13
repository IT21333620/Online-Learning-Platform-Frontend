import axios from "axios";

const BaseURL = process.env.REACT_APP_BACKEND_BASE_URL;
console.log("BaseURL", BaseURL);

export const api = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("keycloakToken")}`,
  },
});
