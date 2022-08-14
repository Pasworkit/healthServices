import {getCookie} from "../utils/cookiehelpers.js";



const instance = axios.create({
	baseURL: 'https://ajax.test-danit.com/api/v2/cards',
	headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

instance.interceptors.request.use(config => {
	const token = getCookie('token');

	if (token) {
		config.headers = {
			'Authorization': `Bearer ${token}`,
		}
	}

	return config;
}, error => {
	return Promise.reject(error);
})

export default instance;