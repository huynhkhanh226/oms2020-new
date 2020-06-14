import { userConstants } from '../actions/types';

let loginStatus = localStorage.getItem('loginStatus');

const initialState = loginStatus !== null ? { loginStatus: loginStatus} : {loginStatus: false};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_STATUS:
      localStorage.setItem('loginStatus', action.status);
        console.log("reducer: " + action.status);
      return {
        loginStatus: action.status
      };
    default:
      return state
  }
}