/**
 *
 *    Reducer Actions : Main File
 *
 */

import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const LOGOUT = 'LOGOUT';
export const AUTH = 'AUTH';
export const FETCH_ONE_EVENT = 'FETCH_ONE_EVENT';
export const CREATE_ONE_EVENT = 'CREATE_ONE_EVENT';

/**
 *    Fetches all events from the backend,
 *    and then returns the action handles and data as a Reducer Action.
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

/**
 *    
 *    Sends data to the backend to Create 1 new event
 *    @param  {JSON} json with properties for backend
 *    
 */
export function createEvent(data) {
  const request = axios.post('api/events', data);
  return {
    type: CREATE_ONE_EVENT,
    payload: request
  };
}

/**
 *    Fetches one specific event from the backend,
 *    and then return the action handles and data as a Reducer Action.
 *
 *    @param [Number] which should be the ID of the event
 */
export function fetchOneEvent(id) {
  const request = axios.get(`api/events/${id}`).catch((err) => err);
  return {
    type: FETCH_ONE_EVENT,
    payload: request.data.data
  };
}
