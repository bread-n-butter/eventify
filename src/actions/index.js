import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const AUTH = 'AUTH';

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

// export function signup() {
//   //this is giving a cors warning!
//   const request = axios.get('api/auth/facebook');
//   return {
//     type: SIGNUP,
//     payload: request
//   };
// }

export function auth() {
  const request = axios.get('api/loggedin');
  return {
    type: AUTH,
    payload: request
  };
}
