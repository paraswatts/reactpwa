import * as actionType from './actionTypes';
const INTIAL_STATE = {
  numberExist: true,
  showLoader: false,
  showDialog: false,
  verifyOTPNumber:true,
  showAlert:false,
  message:'',
  showRegistrationForm:false,
  userRegistered:false
};
export default function (state = INTIAL_STATE, action) {
  switch (action.type) {
    case actionType.CHECK_NUMBER:
      return { ...state, numberExist: action.numberExist};
    case actionType.SHOW_DIALOG:
    return { ...state, showDialog: action.showDialog,showAlert:action.showAlert };  
    case actionType.SHOW_LOADER:
      return { ...state, showLoader: true };
    case actionType.HIDE_LOADER:
      return { ...state, showLoader: false };
      case actionType.VERIFY_OTP:
      return { ...state, verifyOTPNumber: action.verifyOTPNumber,showAlert:action.showAlert ,message:action.message,showRegistrationForm:action.showRegistrationForm};  
      case actionType.RESET_PROPS:
      return {numberExist:true,verifyOTPNumber:true,showLoader:false,showDialog:false,message:'',showAlert:false,showRegistrationForm:false}
      case actionType.USER_REGISTERED:
      return {...state,userRegistered:action.userRegistered}
  }
  return state;
}
