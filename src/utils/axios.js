import axios from "axios";

const url = "https://api.chucknorris.io/jokes/";

export default axios.create({
  baseURL: url,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${localStorage.getItem("auth_token") || ""}`,
  },
});
