import axios from 'axios';

const api = axios.create({
	//baseURL: "http://localhost:3333/",		
	baseURL: "https://novadaxbackend.netlify.app/.netlify/functions/api/",
});

export default api;