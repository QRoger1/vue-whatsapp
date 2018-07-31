import axios from 'axios';

const BASE_URL = 'http://localhost:5387/api/Events';

export default {
 	getEvents(userId) {
		//return axios.get(`${BASE_URL}?userId=${userId}`)
		return Promise.resolve({ 
			Success : true, 
			Message : 'List of Events', 
			Data : {
				Events : [
					{ 
						Id : 1, 
						NameEvent : "Event1", 
						StartDatetime : "01/25/2018 08:00" , 
						EndDatetime : null 
					},
					{ 
						Id : 2, 
						NameEvent : "Event2", 
						StartDatetime : "01/25/2018 08:00" , 
						EndDatetime : null 
					}					
				]
			}
		})
	}
}