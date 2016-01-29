import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const REQUIRE_AUTH = 'REQUIRE_AUTH';

export function fetchEvents() {
  const request = axios.get('api/events');
  return {
    type: FETCH_EVENTS,
    payload: request
  };
}

export function logout() {
  axios.get('api/auth/logout');
  return {
    type: LOGOUT
  };
}

export function signup() {
  axios.get('api/auth/facebook');
  return {
    type: SIGNUP
  };
}

export function requireAuth() {
  const request = axios.get('api/loggedin');
  return {
    type: REQUIRE_AUTH,
    payload: request.data.isLoggedIn
  };
}
