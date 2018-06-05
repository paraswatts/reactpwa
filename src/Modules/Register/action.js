import * as actionType from './actionTypes';
import axios from 'axios';
import qs from 'qs';

const API_URL = 'http://103.198.8.30/api/resident/api.php?apicall=';

export function resetValue() {
  return function (dispatch) {
    dispatch({
      type: actionType.SHOW_DIALOG,
      showDialog: false,
      showAlert:false
    });
  }
}

export function resetResisterProps() {
  return function (dispatch) {
    dispatch({
      type: actionType.RESET_PROPS,
    });
  }
}
export function checkNumber(mobileNumber) {
  return function (dispatch) {
    dispatch({ type: actionType.SHOW_LOADER })
    dispatch(resetValue())
    axios.post(`${API_URL}checkNumber`, queryString.stringify({ residentMobileNo: mobileNumber }))
      .then(response => {
        console.log("response", response.data)
        dispatch({
          type: actionType.CHECK_NUMBER,
          numberExist: response.data.error,
        });
        if (response.data.error)
        dispatch({type:actionType.SHOW_DIALOG,showDialog:true})  
        dispatch({ type: actionType.HIDE_LOADER })
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export function verifyOTP(otp) {
  return function (dispatch) {
    dispatch({ type: actionType.SHOW_LOADER })
    dispatch(resetValue())
    axios.post(`${API_URL}verifyOTP`, queryString.stringify({ otp: otp }))
      .then(response => {
        console.log("response", response.data)
        dispatch({
          type: actionType.VERIFY_OTP,
          verifyOTPNumber: response.data.error,
          showAlert:true,
          message:response.data.message
        });
        if (response.data.error){}
        //dispatch({type:actionType.SHOW_DIALOG,showDialog:true})  
        dispatch({ type: actionType.HIDE_LOADER })
      })
      .catch((error) => {
        console.log(error);
      })
  }
}