const axios = require('axios');
const baseUrl = '/api'
let request = axios.create({
	baseURL:baseUrl,
});

request.interceptors.response.use((response)=>{
	if(response.status===200) {
		return response.data;
	}
	else {
		return response;
	}
},(error) => {
	return Promise.reject(error);
})

export default request;
