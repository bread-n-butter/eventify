/**
 *
 *    Reducer Action List & Factories: Main File
 *
 */

import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const LOGOUT = 'LOGOUT';
export const AUTH = 'AUTH';
export const FETCH_ONE_EVENT = 'FETCH_ONE_EVENT';
export const CREATE_ONE_EVENT = 'CREATE_ONE_EVENT';
<<<<<<< HEAD
export const UPLOAD_IMG = 'UPLOAD_IMG';
<<<<<<< HEAD
export const SET_DATE = 'SET_DATE';
=======
export const REJECT_FILE = 'REJECT_FILE';
=======
export const SELECT_EVENT = 'SELECT_EVENT';
>>>>>>> set up event page and created action to select event
>>>>>>> set up event page and created action to select event

/**
 *    Fetches all events from the backend
 *    
 *    @returns [Object] action that feeds into the reducer function
 */
export function fetchEvents() {
  const request = axios.get('api/events');
  return {
    type: FETCH_EVENTS,
    payload: request
  };
}

export function logout() {
  const request = axios.get('api/auth/logout');
  return {
    type: LOGOUT,
    payload: request
  };
}


export function auth() {
  const request = axios.get('api/loggedin');
  return {
    type: AUTH,
    payload: request
  };
}

export function uploadImage(file) {
  //TODO: save result to a var and then call put outside of promise
  let imageUrl;
  const request = axios.get('api/s3/sign?file_name=' + file.name + '&file_type=' + file.type)
                        .then((result) => {
                          imageUrl = result.data.url;
                          return axios.put(result.data.signed_request, file, {
                            headers: {
                              'Content-Type': file.type
                            }
                          }).then(() => { return imageUrl; });
                        });
  return {
    type: UPLOAD_IMG,
    payload: request
  };
}

/**
<<<<<<< HEAD
 *    Creates one Event by sending data to the backend, then dispatching the event 
 *    
 *    @param  {JSON} json with properties for backend
 *    @returns [Object] action that feeds into the reducer function
=======
 *
 *    Sends data to the backend to Create 1 new event
 *    @param  {JSON} json with properties for backend
 *
>>>>>>> set up event page and created action to select event
 */
export function createEvent(data) {
  const request = axios.post('api/events', data);
  return {
    type: CREATE_ONE_EVENT,
    payload: request
  };
}

/**
 *    Fetches one specific event from the backend
 *
 *    @param [Number] which should be the ID of the event
 *    @returns [Object] action that feeds into the reducer function
 */
export function fetchOneEvent(id) {
  const request = axios.get(`api/events/${id}`).catch((err) => err);
  return {
    type: FETCH_ONE_EVENT,
    payload: request.data.data
  };
}

<<<<<<< HEAD
export function setEventDate(date) {
  return {
    type: SET_DATE,
    payload: date
=======
export function selectEvent(event) {
  return {
    type: SELECT_EVENT,
    payload: event
>>>>>>> set up event page and created action to select event
  };
}
