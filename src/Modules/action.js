import * as actionType from './actionTypes';
import axios from 'axios';
//import queryString from 'query-string';
import qs from 'qs';
import { AppConstants } from '../utils/constants'

export function resetValue() {
  return function (dispatch) {
    dispatch({
      type: actionType.SHOW_DIALOG,
      showDialog: false,
      showAlert: false
    });
  }
}
//stringify2
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
    axios.post(`${AppConstants.API_URL}checkNumber`, qs.stringify({ residentMobileNo: mobileNumber }))
      .then(response => {
        console.log("response check number", response.data)
        dispatch({
          type: actionType.CHECK_NUMBER,
          numberExist: response.data.error,
        });
        if (response.data.error)
          dispatch({ type: actionType.SHOW_DIALOG, showDialog: true })
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
    axios.post(`${AppConstants.API_URL}verifyOTP`, qs.stringify({ otp: otp }))
      .then(response => {
        console.log("response", response.data)
        dispatch({
          type: actionType.VERIFY_OTP,
          verifyOTPNumber: response.data.error,
          showAlert: true,
          message: response.data.message,
          showRegistrationForm: !response.data.error
        });
        if (response.data.error) {

        }
        //dispatch({type:actionType.SHOW_DIALOG,showDialog:true})  
        dispatch({ type: actionType.HIDE_LOADER })
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export function registerUser(postObj) {
  console.log("register user", postObj)
  return function (dispatch) {
    dispatch({ type: actionType.SHOW_LOADER })
    //dispatch(resetValue())
    //societyId: postObj.societyId, residentName: postObj.residentName, ownerName: postObj.ownerName, residentPassword: postObj.residentPassword, usertype: postObj.usertype, residentMobileNo: postObj.residentMobileNo, residentEmailId: postObj.residentEmailId, createdAt: postObj.createdAt, flatno: postObj.flatno 
    axios.post(`${AppConstants.API_URL}signup`, qs.stringify(postObj))
      .then(response => {
        console.log("response", response)
        dispatch({ type: actionType.USER_REGISTERED, userRegistered: true })

        //dispatch({type:actionType.SHOW_DIALOG,showDialog:true})  
        dispatch({ type: actionType.HIDE_LOADER })
      })
      .catch((error) => {
        dispatch({ type: actionType.HIDE_LOADER })
        console.log(error);
      })
  }
}