import axios from "axios";
// import * as dotenv from "dotenv";

// dotenv.config();

//
const axiosClient = axios.create({
  // baseURL: process.env.URL_FAKE,
  baseURL: "D:\\web\\_\\kanban\\default\\space.json",
});

export default axiosClient;
