import * as actionType from './actionTypes';
const INTIAL_STATE = {
  loginStatus: false,
  showLoader: false,
  showAlert: true,
  message: ''
};
export default function (state = INTIAL_STATE, action) {
  switch (action.type) {

    case actionType.SHOW_LOADER:
      return { ...state, showLoader: true };
    case actionType.HIDE_LOADER:
      return { ...state, showLoader: false };
    case actionType.LOGIN_SUCCESSFULL:
      return { ...state, loginStatus: action.loginStatus, message: action.message,showAlert:action.showAlert };
    case actionType.RESET_PROPS:
    return {...state,showLoader:false,verifyOTPNumber:true,message:'',message:'',showAlert:true}
  }
  return state;
}
