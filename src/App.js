import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from "react-router-dom";
import logo from './logo.svg';
// import './App.css';
import Login from "./components/Login";
import About from "./components/About";
import SignIn from "./components/signin";
import SocietyDashboard from "./components/SocietyDashboard";
import AllMembers from './components/AllMembers'
import AllAccounts from './components/AllAccounts';
import AllBills from './components/AllBills';
import Register from './components/Register';
import ResidentDashboard from './components/ResidentDashboard';
import MyProfile from './components/MyProfile';
import PayBills from './components/PayBills'
import GenerateBills from './components/GenerateBills';
import { spring, AnimatedSwitch } from 'react-router-transition';
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};
class App extends Component {
  
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React App</h2>
        </div> */}
        <BrowserRouter>
          <div>
          <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={bounceTransition.atLeave}
    atActive={bounceTransition.atActive}
    mapStyles={mapStyles}
    className="route-wrapper"
  >
            <Route path="/" exact component={Login} />
            <Route path="/About" exact component={About} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/SocietyDashboard" exact component={SocietyDashboard} />
            <Route path="/AllMembers" exact component={AllMembers} />
            <Route path="/AllAccounts" exact component={AllAccounts} />
            <Route path="/AllBills" exact component={AllBills} />
            <Route path="/Register" exact component={Register} />
            <Route path="/ResidentDashboard" exact component={ResidentDashboard} />
            <Route path="/MyProfile" exact component={MyProfile} />
            <Route path="/PayBills" exact component={PayBills} />
              <Route path="/GenerateBills" exact component={GenerateBills} />
            </AnimatedSwitch>  
          </div>  
        </BrowserRouter>
      </div>
    );
  }
}
export default App;