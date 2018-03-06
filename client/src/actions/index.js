import axios from 'axios';

export const FETCH_SNUS = 'FETCH_SNUS';

export function fetchSnus() {
	const request = axios.get('/snu');

	return {
		type: FETCH_SNUS,
		payload: request
	};
}

//fetch FIRST RANDOM SNU
//ONCLICK set the Snu to 'READ'

// export function fetchPost(id) {

// 	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

// 	return {
// 		type: FETCH_POST,
// 		payload: request
// 	};
// }

// export function createPost(wtf, callback) {
	
// 	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, wtf)
// 		.then(() => callback());

// 	return {
// 		type: CREATE_POST,
// 		payload: request
// 	};
// }
