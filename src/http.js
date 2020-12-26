import axios from "axios";

if (
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname === ""
) {
  axios.defaults.baseURL = "http://localhost:9090";
} else {
  axios.defaults.baseURL = `http://${window.location.hostname}`;
}
export const getArticles = () => {
  return axios
    .get("/articles")
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
};
export const getSingleArticle = (article) => {
  return axios.get(`/articles/${article}`).then((res) => {
    return res.data;
  });
};
