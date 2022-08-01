const instance = axios.create({
	baseURL: 'https://ajax.test-danit.com/api/v2/cards',
});

instance.interceptors.request.use(config => {
	// const token = localStorage.getItem('token');
	// const token = getCookie('token')

	if (token) {
		config.headers = {
			// 'Authorization': `Bearer ${token}`
		}
	}

	return config;
})

export default instance;