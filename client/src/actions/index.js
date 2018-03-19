import axios from 'axios';

export const FETCH_SNUS = 'FETCH_SNUS';
export const FETCH_SNU = 'FETCH_SNU';
export const SET_TO_READ = 'SET_TO_READ';
export const CREATE_SNU = 'CREATE_SNU';
export const GET_SNUS_MATCHING_KEYWORD = 'GET_SNUS_MATCHING_KEYWORD';
export const GET_RANDOM_SNU = 'GET_RANDOM_SNU';
export const GET_READ_SNUS = 'GET_READ_SNUS';


export function getReadSnus() {
  const request = axios.get('/snus/read');
  return {
    type: GET_READ_SNUS,
    payload: request
  };
}

export function getRandomSnu() {
  const request = axios.get('/snus/random');
  return {
    type: GET_RANDOM_SNU,
    payload: request
  };
}

export function getSnusMatchingKeyword(keyword) {
  const request = axios.get(`/snus/keyword/${keyword}`);
  return {
    type: GET_SNUS_MATCHING_KEYWORD,
    payload: request
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
  object.keywords = object.keywords.replace(/\s/g, '').split(',');
  const request = axios.post('/snus', object);
    return {
      type: CREATE_SNU,
      payload: request
    };
}
