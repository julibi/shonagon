import axios from 'axios';

export const ENABLE_KEYWORDS_SHOWING = 'ENABLE_KEYWORDS_SHOWING'; 
export const FETCH_SNUS = 'FETCH_SNUS';
export const FETCH_SNU = 'FETCH_SNU';
export const SET_TO_READ = 'SET_TO_READ';
export const CREATE_SNU = 'CREATE_SNU';
export const GET_SNUS_MATCHING_KEYWORD = 'GET_SNUS_MATCHING_KEYWORD';

export function getSnusMatchingKeyword(keyword) {
  const request = axios.get(`/snus/keyword/${keyword}`);
  return {
    type: GET_SNUS_MATCHING_KEYWORD,
    payload: request
  };
}

export function enableKeywordsShowing() {
  return {
		type: ENABLE_KEYWORDS_SHOWING,
		payload: { showKeywords:  true }
	};
}

export function fetchSnus() {
	const request = axios.get('/snus');
	return {
		type: FETCH_SNUS,
		payload: request
	};
}

export function fetchSnu(id) {
	const request = axios.get(`/snus/${id}`);
	return {
		type: FETCH_SNU,
		payload: request
	};
}

export function setToRead(id, snu) {
  const request = axios.patch(`/snus/${id}`, { title: snu.title, text: snu.text, keywords: snu.keywords, read: true });
    return {
      type: SET_TO_READ,
      payload: request
    }
}

export function createSnu(object) {
  const request = axios.post('/snus', object);
    return {
      type: CREATE_SNU,
      payload: request
    };
}

// export async function setToRead(id, theSnu) {
//   // const requestObject = { title: theSnu.title, text: theSnu.text, read: true, keywords: theSnu.keywords };
//   try {
//     const response = await axios.get(`/snu/${id}`);
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// export function newSnu() {
//   const request = axios.post('/snu');

//   return {
//     type: SET_TO_READ,
//     payload: request,
//     title: "blabla",
//     text: "blabla",
//     keywords: ["1", "2"]
//   };
// }


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
