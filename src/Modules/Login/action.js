import * as actionType from './actionTypes';
import axios from 'axios';
import qs from 'qs';
import { AppConstants } from '../../utils/constants'

export function resetLoginProps() {
  return function (dispatch) {
    dispatch({
      type: actionType.RESET_PROPS
    });
  }
}
export function signInUser(mobileNumber, password) {
  return function (dispatch) {
    dispatch(resetLoginProps())
    dispatch({ type: actionType.SHOW_LOADER })

    axios.post(`${AppConstants.API_URL}login`, qs.stringify({ mobileno: mobileNumber, password: password }))
      .then(response => {
        console.log("response login", response.data)
        dispatch({
          type: actionType.LOGIN_SUCCESSFULL,
          loginStatus: response.data.error,
          message: response.data.message,
          showAlert: false
        });
        dispatch({ type: actionType.HIDE_LOADER })
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

