import axios from "axios";

const BASEURL = "http://127.0.0.1:8000/api";

export default axios.create({
  baseURL: BASEURL,
});

export const axiosPrivate = axios.create({
  baseURL: BASEURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
