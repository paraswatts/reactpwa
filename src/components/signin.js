import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import Carousel from 'nuka-carousel';
import './css/Login.css';
import { Button, form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import fbLogo from '../images/facebook.svg'
import gPlusLogo from '../images/google-plus.svg'
import Box from 'react-layout-components';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/Email';
import PasswordView from '../images/view.svg';
import PasswordHide from '../images/private.svg';
import Lock from '../images/locked.svg';
import Mail from '../images/mail.svg';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { signInUser,resetLoginProps } from '../Modules/Login/action';
import Spinner from './spinner'
import SnackbarContent from '@material-ui/core/SnackbarContent';

import Snackbar from '@material-ui/core/Snackbar';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      open: false,
      anchorEl: null,
      showPassword: true,
      dialogOpen: false,
      redirect: false,
      emailOrMobile: '9888769238',
      password: 'dsfsdfsd',
      snackbar: false,

    };
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  componentWillUnmount() { 
    this.props.resetLoginProps();
  }
  handleshowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  handleDialogClickOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleOnClick = (path) => {
    // some action...
    // then redirect
    this.setState({ redirect: true, path: path });
  }

  submitForm = () => {
    var regex = /^\d{10}$/
    var emailReg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if (!regex.test(this.state.emailOrMobile)) {
      this.setState({ message: 'Please enter a valid mobile number', snackbar: true })
    }

    else if (this.state.password == '') {
      this.setState({ message: 'Please enter password', snackbar: true })
    }
    // else if(this.state.email!='' && !emailReg.test(this.state.email)){
    //   this.setState({ message: 'Please enter a valid email', snackbar: true })

    // }
    else {

      this.props.signInUser(this.state.emailOrMobile, this.state.password);

    }



  }
  handleClose = () => {
    this.setState({ snackbar: false });
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: !this.state.dialogOpen });
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.showAlert, this.props.showAlert, nextProps.message)
    if (nextProps.showAlert != this.props.showAlert) {
      if (!nextProps.showAlert) {
        this.setState({ snackbar: true })

      }

    }
    if (nextProps.message) {
      this.setState({ message: this.props.message })
    }
  }
  render() {

    console.log(this.props.loginStatus, "loginStatus")
    if (this.state.redirect) {
      return <Redirect push to={`${this.state.path}`} />;
    }
    return (
      <div className={"img"}>
        {this.props.showLoader ? <Spinner /> : null
        }

        <Snackbar

          autoHideDuration={2000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={this.state.snackbar}
          onClose={this.handleClose}

          message={<span id="message-id">{this.state.message}</span>}
        />

        {/* <Snackbar
         
          autoHideDuration={2000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={this.state.snackbar}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.message}</span>}
        />  */}
        <Box className={"sampleBorderClass"} style={{ position: 'fixed', width: '100%', height: '100%', flexDirection: 'column' }}>
          <Box className={"sampleBorderClass"} style={{ flexDirection: 'column', }} flex={2}>
            <Box className={"sampleBorderClass"} style={{ alignItems: 'flex-end', justifyContent: 'center' }} flex={8}>
              <span style={{ color: '#04b4d9', fontSize: '13vw', fontWeight: '800', textAlign: 'center' }} className={"sampleBorderClass"}>EASY</span>
              <span style={{ color: '#1fc13f', fontSize: '13vw', fontWeight: '800' }} className={"sampleBorderClass"}>PAY</span>
            </Box>
            <Box className={"sampleBorderClass"} style={{ alignItems: 'flex-start', justifyContent: 'center' }} flex={2}>
              <span className={"sampleBorderClass"} style={{ fontSize: '3vw', fontWeight: 400, color: 'rgb(43,48,56)' }} >Online Payment & Billing Solution</span></Box>
          </Box>
          <Box style={{ width: '100vw', alignItems: 'center', flexDirection: 'column' }} justifyContent={'center'} className={"sampleBorderClass4"} >
            <form style={{ width: '100vw', marginBottom: '5vw', marginTop: '15vw' }} noValidate autoComplete="off" className={"sampleBorderClass2"}>
              <TextField
                style={{ width: '90vw' }}
                id="mobile"
                type="email"
                value={this.state.emailOrMobile}
                onChange={this.handleChange('emailOrMobile')}
                placeholder="Email or Mobile Number"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Mail} style={{ height: 20, width: 20 }}></img>
                    </InputAdornment>
                  ),
                }}
              />
            </form>
            <form style={{ width: '100vw' }} className={"sampleBorderClass3"}>
              <TextField
                style={{ width: '90vw' }}
                id="password"
                placeholder="Password"
                margin="normal"
                value={this.state.password}
                onChange={this.handleChange('password')}
                type={!this.state.showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" onClick={this.handleshowPassword}>
                      <img src={this.state.showPassword ? PasswordView : PasswordHide} style={{ height: 20, width: 20 }}></img>
                    </InputAdornment>
                  ),
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Lock} style={{ height: 20, width: 20 }}></img>
                    </InputAdornment>
                  ),
                }}
              />
            </form>

          </Box>
          <Box className={"sampleBorderClass3"} style={{ flexDirection: 'column' }} >
            <h5 style={{ alignSelf: 'flex-end', marginTop: 10, textAlign: "flex-end", marginRight: 20, color: '#555' }}>Forget?</h5>

            <button onClick={this.submitForm} style={{
              backgroundColor: '#04b4d9', border: 0, borderRadius: 5,
              color: '#fff', fontSize: '5vw',

              marginLeft: '5vw', marginRight: '5vw',
              padding: 10
            }}>SIGN IN</button>

            <h5 className={"sampleBorderClass4"} style={{ alignSelf: 'center', textAlign: "center", color: '#04b4d9', fontSize: 15 }}>or<br />Login with</h5>
            <Box className={"sampleBorderClass3"} style={{ alignItems: 'center', justifyContent: 'center' }}>
              <img className={"img_social_fb"} style={{ width: 50, height: 30, padding: 15 }} src={fbLogo}></img>
              <img className={"img_social_gplus"} style={{ marginLeft: 20, width: 50, height: 30, padding: 15 }} src={gPlusLogo}></img>
            </Box>
          </Box>
          <Box style={{ alignItems: 'center', justifyContent: 'center', marginBottom: '5vw', marginTop: '5vw' }}>
            <span className={"sampleBorderClass4"} >Dont't have an account?<span style={{ color: 'green' }} onClick={this.handleOnClick.bind(this, "/Register")}> Register here</span></span>
          </Box>
        </Box>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    loginStatus: state.login.loginStatus,
    showLoader: state.login.showLoader,
    showAlert: state.login.showAlert,
    message: state.login.message

  };
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
  resetLoginProps,
  signInUser
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
