import axios from 'axios';

const BASE_URL = 'http://localhost:5387/api/Accounts'

export default { 	
 	signIn(username) {
		return axios.get(`${BASE_URL}?accountName=${username}`)
	}
}