import axios from "axios";

const token = localStorage.getItem('token') ?? "";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': token
  }
})


export default instance;