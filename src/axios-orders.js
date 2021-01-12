import axios from 'axios'

const instance = axios.create({
  baseURL: "https://burgerapp-5d496-default-rtdb.firebaseio.com/"
});

export default instance;