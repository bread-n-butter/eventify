import { LOGOUT, REQUIRE_AUTH } from '../actions/index';

const INITIAL_STATE = {isLoggedin: false};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case REQUIRE_AUTH:
    return state;
  case LOGOUT:
    return {isLoggedIn: false};
  default:
    return state;
  }
}