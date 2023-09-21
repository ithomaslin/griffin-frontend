import axios from "axios";

const BASEURL = "https://api.tradinglab.app/api";

export default axios.create({
  baseURL: BASEURL,
});

export const axiosPrivate = axios.create({
  baseURL: BASEURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
