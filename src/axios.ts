import axios from 'axios'

//TMDBからのbaseURLリクエストを作成
const instance = axios.create({
  baseURL: "https://api.dmm.com/",
});

export default instance;