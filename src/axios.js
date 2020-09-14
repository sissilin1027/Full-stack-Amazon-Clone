import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-1df15.cloudfunctions.net/api",
});

export default instance;
