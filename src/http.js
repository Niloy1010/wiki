import axios from "axios";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  axios.defaults.baseURL = "http://localhost:9090";
} else {
  axios.defaults.baseURL = "http://192.168.99.100";
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
