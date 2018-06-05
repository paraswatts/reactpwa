import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Carousel from 'nuka-carousel';
import './css/Login.css';
import PropTypes from 'prop-types';
import  Alert  from 'react-s-alert';

import Box from 'react-layout-components';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import checked from '../images/checked.svg';
import unchecked from '../images/uncheked.svg';
import { withStyles } from '@material-ui/core';
import send from '../images/paper-plane.svg'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { checkNumber,verifyOTP,resetResisterProps,registerUser } from '../Modules/action';
import Spinner from './spinner'
import SnackbarContent from '@material-ui/core/SnackbarContent';

import Snackbar from '@material-ui/core/Snackbar';
import { S_IFIFO } from 'constants';
const SnackbarCustom = withStyles(() => ({ anchorOriginTopCenter: {} }))(Snackbar);

const Label = withStyles(() => ({ label: { fontSize: '3vw', color: 'rgb(109,117,130)' } }))(FormControlLabel);
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      open: false,
      anchorEl: null,
      showPassword: true,
      dialogOpen: false,
      mobileNumber: '9888769238',
      accountType: '',
      resident: false,
      tenent: false,
      society: false,
      message: '',
      snackbar: false,
      otp:'123456',
      flatOwnerName:'sas',
      flatNumber:'4353',
      password:'dasdas',
      email:'dsad@dsfs.com',
      userName:'dasda',
      userType:'resident',
    };
  }

  changePage = (path) => {
    this.props.history.push(path);
  }
  
  handleClose = () => {
    this.setState({ snackbar: false });
  };
  handleDialogClickOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };


  checkNumber = () => {
    var regex = /^\d{10}$/
    this.setState({ dialogOpen: false })
    console.log(this.state)
    if (!this.state.resident && !this.state.society && !this.state.tenent) {
      this.setState({ message: 'Please select an account type', snackbar: true })
    }
    else if (this.state.mobileNumber == '') {
      this.setState({ message: 'Please enter a mobile number', snackbar: true })
    }
    else if (!regex.test(this.state.mobileNumber)) {
      this.setState({ message: 'Please enter a valid mobile number', snackbar: true })
    }
    else {
      if (this.state.resident || this.state.tenent) {
        this.props.checkNumber(this.state.mobileNumber);
      }
      else {
        console.log("society call")
      }
    }
  }

  submitForm = () => {
    var postObj = Object.create(null);
    var regex = /^\d{10}$/
    var emailReg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    this.setState({ dialogOpen: false })
    console.log(this.state)
    if (!this.state.resident && !this.state.society && !this.state.tenent) {
      this.setState({ message: 'Please select an account type', snackbar: true })
    }
    else if (this.state.flatOwnerName == '') {
      this.setState({ message: 'Please enter flat Owner Name', snackbar: true })
    }
    else if (this.state.flatNumber == '') {
      this.setState({ message: 'Please enter flat number', snackbar: true })
    }
    
    else if (this.state.mobileNumber == '') {
      this.setState({ message: 'Please enter mobile number', snackbar: true })
    }
    else if (!regex.test(this.state.mobileNumber)) {
      this.setState({ message: 'Please enter a valid mobile number', snackbar: true })
    }
    else if (this.state.userName == '') {
      this.setState({ message: 'Please enter user name', snackbar: true })
    }
    else if (this.state.password == '') {
      this.setState({ message: 'Please enter password', snackbar: true })
    }
    else if(this.state.email!='' && !emailReg.test(this.state.email)){
      this.setState({ message: 'Please enter a valid email', snackbar: true })

    }
    else {
      postObj.societyId =1
      postObj.residentName = this.state.userName
      postObj.ownerName = this.state.ownerName
      postObj.residentPassword =this.state.password
      postObj.userType =this.state.userType
      postObj.residentMobileNo =this.state.mobileNumber
      postObj.residentEmailId =this.state.email
      postObj.createdAt ="2018-12-12"
      postObj.flatno =this.state.flatNumber
      // postObj.societyId("societyId",1)
      // postObj.append("residentName",this.state.userName)
      // postObj.append("ownerName",this.state.ownerName)
      // postObj.append("residentPassword",this.state.password)
      // postObj.append("usertype",this.state.userType)
      // postObj.append("residentMobileNo",this.state.mobileNumber)
      // postObj.append("residentEmailId",this.state.email)
      // postObj.append("createdAt","2018-12-12")
      // postObj.append("flatno",this.state.flatNumber)
      console.log(postObj)
      if (this.state.resident || this.state.tenent) {
        console.log("register call")

        this.props.registerUser(postObj);
      }
      else {
        console.log("society call")
      }
    }


   
  }

  verifyOTP = () => {
    var regex = /^\d{6}$/
    if (!regex.test(this.state.otp)) {
      this.setState({ message: 'Please enter a valid OTP number', snackbar: true })
    }
    else {
      //if (this.state.resident || this.state.tenent) {
        this.props.verifyOTP(this.state.otp);
     // }
      // else {
      //   console.log("society call")
      // }
    }
  }

  componentWillUnmount(){
    console.log("unmount")
      this.props.resetResisterProps();
  }
  handleChange = name => event => {
    console.log(name,event.target.value)
    this.setState({ [name]: event.target.value });
  }
  handleOTPChange = (event) => {
    this.setState({ otp: event.target.value });
  }
  handleCheckedChange = (event) => {
    if (event.target.value == "Resident") {
      if (this.state.resident)
        this.setState({ resident: false ,userType:'resident'})
      else
        this.setState({ resident: true, tenent: false, society: false })
    }
    else if (event.target.value == "Tenent") {
      if (this.state.tenent)
        this.setState({ tenent: false,userType:'tenent' })
      else
        this.setState({ resident: false, tenent: true, society: false })
    }
    else {
      if (this.state.society)
        this.setState({ society: false ,userType:'society'})
      else
        this.setState({ resident: false, tenent: false, society: true })
    }
    this.setState({ accountType: event.target.value });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.showDialog != this.props.showDialog) {
      if (nextProps.showDialog) {
        setTimeout(function () { this.setState({ dialogOpen: true }); }.bind(this), 1000);
      }
    }
    console.log(nextProps.showAlert,this.props.showAlert,"showAlert otp")

    if(nextProps.showAlert != this.props.showAlert){
    console.log("show alert",this.props.message)
    if(nextProps.showAlert){
      console.log("show alert1",this.props.message)
      this.setState({snackbar:true})
        
    }
      
  }
  if(nextProps.message){
    this.setState({message:this.props.message})
  }

  
    console.log(nextProps.verifyOTPNumber,this.props.verifyOTPNumber,"verify otp")
  //   if(nextProps.verifyOTPNumber != this.props.verifyOTPNumber){
  //     console.log("inside if")
  //   if(!nextProps.verifyOTPNumber)
  //   {
  //     console.log("inside if 2")
  //     this.props.history.push("/signin");
  //   }    
    
  // }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.numberExist !== this.props.numberExist || nextProps.showLoader !== this.props.showLoader
  // }

  render() {
    console.log(this.props.message)
    const { classes } = this.props;

    return (
      <div style={{ background: 'rgb(227,227,229)', width: '100vw', height: '100vh' }}>
        {this.props.showLoader ? <Spinner /> : null
        }
       
        <Snackbar
          ContentProps={{
            classes: classes.myCustomBackground,
          }}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={this.state.snackbar}
          onClose={this.handleClose}
        
          message={<span id="message-id">{this.state.message}</span>}
        />
        <Box className={"sampleBorderClass"} style={{ width: '100%', height: '100%', flexDirection: 'column', position: 'fixed' }}>
          <Dialog
            className={"sampleBorderClass4"}
            open={this.state.dialogOpen}
            onClose={this.handleDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <img src={require('../images/nomatch.png')} style={{ marginTop: 10, height: 90, width: 90, alignSelf: 'center' }}></img>

            <DialogContent style={{ padding: 10, alignItems: 'center', justifyContent: 'center' }} className={"sampleBorderClass4"}>

              <DialogContentText className={"sampleBorderClass4"} style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', color: 'rgb(84,88,94)' }} id="alert-dialog-description">
                Your mobile number is not
            </DialogContentText>

              <DialogContentText className={"sampleBorderClass4"} style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', color: 'rgb(84,88,94)' }} id="alert-dialog-description">
                correctly registered in the society record
            </DialogContentText>

              <DialogContentText className={"sampleBorderClass4"} style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', fontSize: '3vw', marginTop: '2vw', marginBottom: -5, color: 'rgb(84,88,94)' }} id="alert-dialog-description">
                Please get it corrected with the society manager
            </DialogContentText>
              <DialogContentText className={"sampleBorderClass4"} style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', fontSize: '3vw', color: 'rgb(84,88,94)' }} id="alert-dialog-description">
                and retry the same
            </DialogContentText>

            </DialogContent>
            <DialogActions style={{ alignItems: 'center', justifyContent: 'center', marginTop: '2vw', marginBottom: '5vw' }}>
              <span style={{ textAlign: 'center' }} className={"buttonDialogTry"} onClick={this.checkNumber}>
                Try Again
            </span>

              <span style={{ textAlign: 'center' }} className={"buttonDialogCancel"} onClick={this.handleDialogClose}>
                Cancel
            </span>

            </DialogActions>
          </Dialog>
          <Snackbar
          ContentProps={{
            classes: classes.myCustomBackground,
          }}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={this.state.snackbar}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.message}</span>}
        />    
          <Box style={{ width: '100vw', height: '10vh', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className={"sampleBorderClass"} style={{ color: 'rgb(81,80,86)', fontSize: '10vw', fontWeight: 600, marginLeft: 10 }}>Sign Up</span>
            <span onClick={this.changePage.bind(this,"/signin")} className={"sampleBorderClass"} style={{ marginRight: 10, fontSize: '5vw', color: 'rgb(27,90,195)' }}>Login</span>
          </Box>
          <Box className={"sampleBorderClass"}>
            <span className={"sampleBorderClass"} style={{ marginLeft: "5vw", fontWeight: 800, fontSize: '3vw', color: 'rgb(27,90,195)', textAlign: 'flex-start' }}>Account Type</span>
          </Box>
          <Box className={"sampleBorderClass"} style={{ justifyContent: 'center', marginLeft: 10, marginRight: 10 }}>
            <Label
              className={"sampleBorderClass4"}
              control={
                <Checkbox
                  checked={this.state.society}
                  onChange={this.handleCheckedChange}
                  icon={<img src={unchecked} style={{ height: 15, width: 15 }} />}
                  checkedIcon={<img src={checked} style={{ height: 15, width: 15 }} />}
                  value="Society"
                />
              }
              label="SOCIETY ACCOUNT"
            />
            <Label
              className={"sampleBorderClass4"}
              control={
                <Checkbox
                  checked={this.state.resident}
                  onChange={this.handleCheckedChange}
                  icon={<img src={unchecked} style={{ height: 15, width: 15 }} />}
                  checkedIcon={<img src={checked} style={{ height: 15, width: 15 }} />}
                  value="Resident"
                />
              }
              label="RESIDENT"
            />
            <Label
              className={"sampleBorderClass4"}
              control={
                <Checkbox
                  checked={this.state.tenent}
                  onChange={this.handleCheckedChange}
                  icon={<img src={unchecked} style={{ height: 15, width: 15 }} />}
                  checkedIcon={<img src={checked} style={{ height: 15, width: 15 }} />}
                  value="Tenent"
                />
              }
              label="TENENT"
            />
          </Box>
          <Box className={"signup"} style={{ background: '#fff', height: '100%', margin: '3vw', flexDirection: 'column' }}>
            {/* {this.props.numberExist ? */}
            {!this.props.showRegistrationForm?
            <Box style={{flexDirection:'column'}}>
              <Box >
              <span className={"sampleBorderClass"} style={{ margin: '3vw', fontSize: '3.5vw', color: 'rgb(27,90,195)', fontWeight: 600 }}>Mobile</span>
              </Box>
             
            <Box  className={"sampleBorderClass"} style={{ marginLeft: '3vw', marginRight: '3vw', flexDirection: 'column' }}>
              {/* <Box flex={3} className={"sampleBorderClass3"} >

                <input
                  style={{ width: '100%', padding: '1vw',display:'none ' }}
                  className={"registerInput"}
                  id="code"
                  placeholder="Code"
                  margin="normal"
                  type={'number'}

                />

              </Box> */}
                <Box className={"sampleBorderClass3"} style={{ width: '100%' }}>

                  <input
                    style={{ width: '100%', padding: '1vw' }}
                    className={"registerInput"}
                    placeholder="Mobile Number"
                    margin="normal"
                    onChange={this.handleChange('mobileNumber')}
                    value={this.state.mobileNumber}
                    type={'number'}

                />
                {
                  console.log(!this.props.numberExist && !this.props.showRegistrationForm)
                }
                {!this.props.numberExist && !this.props.showRegistrationForm?<img src={require('../images/tick.png')} style={{position:'absolute',height:'5.5vw',width:'5.5vw',alignSelf:'center',right:'6vw'}}></img>:null
                }

                </Box> 
              {!this.props.numberExist ? null :
                <button  onClick={this.checkNumber} style={{ margin: '3vw', bottom: 0, marginTop: '8vw' }} className={"buttonNext"}>Verify Mobile Number</button>}

            </Box>

                  </Box>:null}
                  {/* Third Form after otp verification */}

              {this.props.showRegistrationForm ? 

            <Box className={"sampleBorderClass3"} style={{flexDirection:'column'}} >

            <Box >
              <span className={"sampleBorderClass"} style={{ margin: '3vw', fontSize: '3.5vw', color: 'rgb(27,90,195)', fontWeight: 600 }}>Name of flat owner</span>
              </Box>
             
            <Box className={"sampleBorderClass"} style={{ marginLeft: '3vw', marginRight: '3vw', flexDirection: 'column' }}>
            
                <Box className={"sampleBorderClass3"} style={{ width: '100%', }}>

                  <input
                    style={{ width: '100%', paddingTop: '2vw',paddingBottom:'2vw'  }}
                    className={"registerInput"}
                    placeholder="Name of flat owner"
                    margin="normal"
                    onChange={this.handleChange('flatOwnerName')}
                    value={this.state.flatOwnerName}

                />
               

                </Box> 
           

            </Box>
            <Box >
              <span className={"sampleBorderClass"} style={{ marginTop: '3vw',marginLeft:'3vw',marginRight:'3vw',marginBottom:'3vw', fontSize: '3.5vw', color: 'rgb(27,90,195)', fontWeight: 600 }}>Flat number</span>
              </Box>
             
            <Box className={"sampleBorderClass"} style={{ marginLeft: '3vw', marginRight: '3vw', flexDirection: 'column' }}>
            
                <Box className={"sampleBorderClass3"} style={{ width: '100%', }}>

                  <input
                    style={{ width: '100%', paddingTop: '2vw',paddingBottom:'2vw'  }}
                    className={"registerInput"}
                    placeholder="Flat number"
                    margin="normal"
                    onChange={this.handleChange('flatNumber')}
                    value={this.state.flatNumber}

                />
                               </Box> 
           

            </Box>
            <Box >
              <span className={"sampleBorderClass"} style={{ marginTop: '3vw',marginLeft:'3vw',marginRight:'3vw',marginBottom:'3vw', fontSize: '3.5vw', color: 'rgb(27,90,195)', fontWeight: 600 }}>Mobile</span>
              </Box>
             
            <Box className={"sampleBorderClass"} style={{ marginLeft: '3vw', marginRight: '3vw', flexDirection: 'column' }}>
            
                <Box className={"sampleBorderClass3"} style={{ width: '100%', }}>

                  <input
                    style={{ width: '100%', paddingTop: '2vw',paddingBottom:'2vw' }}
                    className={"registerInput"}
                    placeholder="Mobile Number"
                    margin="normal"
                    onChange={this.handleChange('mobileNumber')}
                    value={this.state.mobileNumber}
                    type={'number'}

                />
               
                </Box> 
           

            </Box>

            <Box >
              <span className={"sampleBorderClass"} style={{ marginTop: '3vw',marginLeft:'3vw',marginRight:'3vw',marginBottom:'3vw', fontSize: '3.5vw', color: 'rgb(27,90,195)', fontWeight: 600 }}>User name</span>
              </Box>
             
            <Box className={"sampleBorderClass"} style={{ marginLeft: '3vw', marginRight: '3vw', flexDirection: 'column' }}>
            
                <Box className={"sampleBorderClass3"} style={{ width: '100%', }}>

                  <input
                    style={{ width: '100%', paddingTop: '2vw',paddingBottom:'2vw'  }}
                    className={"registerInput"}
                    placeholder="User name"
                    margin="normal"
                    onChange={this.handleChange('userName')}
                    value={this.state.userName}

                />
                               </Box> 
           

            </Box>
            <Box >
              <span className={"sampleBorderClass"} style={{ marginTop: '3vw',marginLeft:'3vw',marginRight:'3vw',marginBottom:'3vw', fontSize: '3.5vw', color: 'rgb(27,90,195)', fontWeight: 600 }}>Password</span>
              </Box>
             
            <Box className={"sampleBorderClass"} style={{ marginLeft: '3vw', marginRight: '3vw', flexDirection: 'column' }}>
            
                <Box className={"sampleBorderClass3"} style={{ width: '100%', }}>

                  <input
                    style={{ width: '100%', paddingTop: '2vw',paddingBottom:'2vw'  }}
                    className={"registerInput"}
                    placeholder="Password"
                    margin="normal"
                    onChange={this.handleChange('password')}
                    value={this.state.password}
                    type={'password'}

                />
               
               

                </Box> 
           

            </Box>
            <Box >
              <span className={"sampleBorderClass"} style={{ marginTop: '3vw',marginLeft:'3vw',marginRight:'3vw',marginBottom:'3vw', fontSize: '3.5vw', color: 'rgb(27,90,195)', fontWeight: 600 }}>Email(optional)</span>
              </Box>
             
            <Box className={"sampleBorderClass"} style={{ marginLeft: '3vw', marginRight: '3vw', flexDirection: 'column' }}>
            
                <Box className={"sampleBorderClass3"} style={{ width: '100%', }}>

                  <input
                    style={{ width: '100%', paddingTop: '2vw',paddingBottom:'2vw' }}
                    className={"registerInput"}
                    placeholder="Email"
                    margin="normal"
                    type={"email"}
                    onChange={this.handleChange('email')}
                    value={this.state.email}

                />
              
                </Box> 
                <button  onClick={this.submitForm} style={{position:'absolute',alignSelf:'center',marginBottom:'6vw', background: 'rgb(0,214,100)',bottom:0,  bottom: 0, marginTop: '8vw',alignItem:'center',justifyContent:'center',color:'white',border:'0px',width:'88%',padding:'3vw',fontSize:'5vw',textAlign:'center' }} >Submit<img src={send} style={{height:'6vw',width:'6vw',marginLeft:'3vw',alignSelf:'center'}}/></button>

            </Box>

            </Box>:null}


            <Box flex={2} />
            {!this.props.numberExist && !this.props.showRegistrationForm?
              <Box flex={7} className={"sampleBorderClass2"} style={{ justifyContent: 'center', flexDirection: 'column' }}>
                <span style={{ fontSize: '7vw', color: 'rgb(44,44,54)', fontWeight: 600 }}>Enter OTP</span>
                <span style={{ fontSize: '3.5vw', color: 'rgb(44,44,54)', fontWeight: 600, marginTop: '4vw' }}>Please enter the OTP received via SMS below</span>
                <span style={{ fontSize: '3.5vw', color: 'rgb(44,44,54)', fontWeight: 600, marginTop: '1vw' }}>for mobile number verification</span>

                <input onChange={this.handleOTPChange} value={this.state.otp} type="number" style={{ width: '60vw', padding: '4vw', alignSelf: 'center', marginTop: '4vw', border: '1px solid #000' }} />

                <span style={{ fontSize: '3.5vw', color: 'rgb(44,44,54)', fontWeight: 600, marginTop: '2vw' }}>Didn't get the OTP?</span>
                <Box className={"sampleBorderClass2"} style={{ alignItems: 'center', justifyContent: 'center', marginTop: '15vw' }}>
                  <span className={"sampleBorderClass2"} style={{ fontSize: '4vw', color: 'rgb(17,32,126)', fontWeight: 600 }}>Re-send OTP</span> <img src={require('../images/arrow.png')} className={"sampleBorderClass2"} style={{ height: '3.5vw', marginLeft: '2vw' }} /></Box>
              </Box> : null}
            {!this.props.numberExist && !this.props.showRegistrationForm ?
              <button onClick={this.verifyOTP} style={{ margin: '3vw', bottom: 0, marginTop: '8vw' }} className={"buttonNext"}>Next</button>
              : null}
          </Box>
        </Box>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.test)
  return {
    numberExist: state.test.numberExist,
    showLoader: state.test.showLoader,
    showDialog: state.test.showDialog,
    verifyOTPNumber:state.test.verifyOTPNumber,
    showAlert:state.test.showAlert,
    message:state.test.message,
    showRegistrationForm:state.test.showRegistrationForm
  };
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
  resetResisterProps,
  verifyOTP,
  checkNumber,
  registerUser
}, dispatch)

const styles = theme => ({
  myCustomBackground: {
    background: 'linear-gradient(to right bottom, #00897B, #FFE082)',
  },
});
Register.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Register))
