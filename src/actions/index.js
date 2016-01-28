import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';

export function fetchEvents() {
  const request = axios.get('api/events');
  return {
    type: FETCH_EVENTS,
    payload: request
  };
}
