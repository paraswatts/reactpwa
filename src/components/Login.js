import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Carousel from 'nuka-carousel';
import './css/Login.css';
import { withRouter } from "react-router-dom";

import { Button } from 'react-bootstrap';
import Box from 'react-layout-components';


class Login extends Component {

  componentWillMount() {
    console.log(" I made some changes on 05-06-2018")
  }
  changePage = (path) => {
    this.props.history.push(path);
  }
  

  render() {
    return (
      <div className={"img"}>
        <Box className={"sampleBorderClass"} style={{ width: '100%', height: '100%', flexDirection: 'column' }}>
          <Box className={"sampleBorderClass"} style={{ flexDirection: 'column' }} flex={2}>
            <Box className={"sampleBorderClass"} style={{ alignItems: 'flex-end', justifyContent: 'center' }} flex={8}>
              <span style={{ color: '#04b4d9', fontSize: '13vw', fontWeight: '800', textAlign: 'center' }} className={"sampleBorderClass"}>EASY</span>
              <span style={{ color: '#1fc13f', fontSize: '13vw', fontWeight: '800' }} className={"sampleBorderClass"}>PAY</span>
            </Box>
            <Box className={"sampleBorderClass"} style={{ alignItems: 'flex-start', justifyContent: 'center' }} flex={2}>
              <span className={"sampleBorderClass"} style={{ fontSize: '3vw', fontWeight: 400, color: 'rgb(43,48,56)' }} >Online Payment & Billing Solution</span></Box>
          </Box>
          <Box style={{ width: '100vw', alignItems: 'center' }} justifyContent={'center'} className={"sampleBorderClass"} flex={6}>
            <img style={{ width: '90vw', height: '90%' }} src={require('../images/society.png')} />
          </Box>
          <Box className={"sampleBorderClass3"} style={{ flexDirection: 'column' }} flex={3}>
            <Box className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'center', }} flex={3}>
              <span className={"sampleBorderClass2"} style={{ fontSize: '5.8vw', fontWeight: 700, color: 'rgb(43,48,56)' }} >SANSAD VIHAR CGHS LTD.</span>
            </Box>
            <Box flex={7} className={"sampleBorderClass4"} style={{ flexDirection: 'column', bottom: 0, justifyContent: 'center', marginLeft: '5vw', marginRight: '5vw' }}>
              {/* <Link style={{ color: 'transparent' }} to="/signin"> */}
              <button
                onClick={this.changePage.bind(this, "/signin")}
                style={{
                  backgroundColor: '#04b4d9', width: '100%', border: 0, borderRadius: 5,
                  color: '#fff', fontSize: '5vw',
                  marginBottom: 10,
                  padding: 10
                }}>SIGN IN</button>
              {/* </Link> */}
              {/* <Link style={{ color: 'transparent' }} to="/Register"> */}

              <button
                onClick={this.changePage.bind(this, "/Register")}
                style={{
                  backgroundColor: '#1fc13f', width: '100%', border: 0, borderRadius: 5,
                  color: '#fff', fontSize: '5vw', padding: 10
                }}>REGISTER</button>
              {/* </Link> */}
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}


//  {/* <Carousel className={"carousel"} autoplay={false} autoplayInterval={1000} >
//           <div className={"img"}></div>
//           <div className={"img"}></div>
//           <div className={"img"}></div>
//           <div className={"img"}></div>
//           <div className={"img"}></div>
//         </Carousel> */}
export default Login
