import {SIGNUP_SUCCESS,SIGNUP_ERROR} from '../actions/actionTypes'

const INITIAL_STATE = {
    authMsg: null
};

export default function(state = INITIAL_STATE, action) {
    if (
      action.type === SIGNUP_SUCCESS ||
      action.type === SIGNUP_ERROR )
    {
      //console.log('payload: ' + action.payload)
      return { ...state, authMsg: action.payload };
    } else {
      return state;
    }
  }