import axios from "axios";

const Api = axios.create({ baseURL:"http://localhost:8000" });

Api.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = localStorage.getItem("token");
  }
  return req;
});

export default Api;