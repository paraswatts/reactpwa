import * as actionType from './actionTypes';
const INTIAL_STATE = {
  numberExist: true,
  showLoader: false,
  showDialog: false,
  verifyOTPNumber:true,
  showAlert:false,
  message:''
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
      console.log(action.message,"action")
      return { ...state, verifyOTPNumber: action.verifyOTPNumber,showAlert:action.showAlert ,message:action.message};  
      case actionType.RESET_PROPS:
      return {numberExist:true,verifyOTPNumber:true,showLoader:false,showDialog:false,message:'',showAlert:false}
  }
  return state;
}
