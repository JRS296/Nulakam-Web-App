//Axios Setup - for communication with backend, you can use Fetch as well
import axios from "axios";
//import config from "../config.json"

// Server Client
const client = axios.create({baseURL: "https://nulakam.onrender.com/api"}); 
//const client = axios.create({baseURL: "http://localhost:3000/api"}); //Azure IP

//Dev Client
//const client = axios.create({baseURL: 'http://localhost:3000/api'});

export default client;