import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

// crudcrud is not working that's why i haven't done the crud app from this.
export default axios;
