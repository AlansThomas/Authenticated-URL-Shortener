import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;

//user login
export const userLogin = (body) => {
    return axios.post(BASE_URL + "auth/login", body)
}

//user registration
export const userRegister = (body) => {
    return axios.post(BASE_URL + "auth/signup", body)
}