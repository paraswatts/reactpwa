import React, { Component } from 'react';
import { Link,withRouter } from "react-router-dom";
import { Grid, Row, Col } from 'react-bootstrap';
import './css/Login.css';
import Badge from '@material-ui/core/Badge';

import Box from 'react-layout-components';
import SvgIcon from '@material-ui/core/SvgIcon';
import logout from '../images/logout.svg';
import edit from '../images/edit.svg';

import tick from '../images/tick.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, createMuiTheme, MuiThemeProvider, } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import menu from '../images/menu.svg';

import ResidentDrawer from './ResidentDrawer';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import input from '@material-ui/core/input';
import InputAdornment from '@material-ui/core/InputAdornment';
import arrow from '../images/arrow.svg';

import List from '@material-ui/core/List';

const RedBadge = withStyles(() => ({ badge: { backgroundColor: '#F00', color: '#fff', height: 20, width: 20, margin: 5 } }))(Badge);
// const Drawer = withStyles(() => ({ modal: { width: '80%' }, docked: {}, paper: { position: 'relative' } }))(SwipeableDrawer);

//className={"sampleBorderClass"}


class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
            open: false,
            anchorEl: null,
            dialogOpen: false

        };
    }

    goBack = (props) => {
        this.props.history.goBack();
      }
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    toggleDrawer = (open) => () => {
        this.setState({
            open: open
        });
    };

    handleDialogClickOpen = () => {
        this.setState({ dialogOpen: true, anchorEl: false });
    };

    handleDialogClose = () => {
        this.setState({ dialogOpen: false, anchorEl: false });
    };
    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
    }


    render() {
        return (
            <Box column width={this.state.width} height={this.state.height} className={"grid"}>
                <ResidentDrawer openDrawer={this.state.open} toggleDrawer={this.toggleDrawer.bind(this)} />
                {/* <Box flex={10} style={{position:'fixed',width:'100%',zIndex:100, backgroundColor: '#197fc7', alignItems: 'center', justifyContent: 'center' }} className={"dashboard-upper"}> */}
                <Box style={{ paddingTop: '2.5vw', paddingBottom: '2.5vw', width: '100%', zIndex: 100, backgroundColor: 'rgb(4,178,216)', alignItems: 'center', justifyContent: 'space-between' }} >
                    <IconButton aria-label="Menu" >
                        <img src={arrow} onClick={this.goBack.bind(this)} style={{ width: '5vw', height: '5vw' }} />
                    </IconButton>
                    <span style={{ color: 'white', fontSize: '5vw' }}>MY PROFILE</span>
                    <div >
                        <IconButton aria-label="Menu">
                            <img style={{ width: 20, height: 20 }} src={tick}>
                            </img>
                        </IconButton>
                    </div>
                    {/* </Box> */}
                </Box>
                <Box className={"sampleBorderClass3"}>
                    {/* <Box className={"sampleBorderClass3"}></Box> */}
                    <Box className={"sampleBorderClass4"} style={{ flexDirection: 'column' }}>
                        <Avatar  style={{
                            height: 70,
                            marginLeft: '3vw',
                            marginTop: '3vw',
                            width: 70, borderRadius: '50%',
                        }} alt="User" src={require("../images/building.jpg")} />
                        <span style={{ textAlign: 'center', color: 'rgb(4,178,216)', marginLeft: '3vw', marginTop: '3vw', fontWeight: 500 }}>
                            Edit   </span>
                    </Box>
                    <Box className={"sampleBorderClass3"} style={{ flexDirection: 'column', width: '100%' }}>
                        <Box className={"sampleBorderClass4"} style={{ flexDirection: 'column', marginLeft: '4vw', marginRight: '4vw', marginTop: '6vw',justifyContent:'center' }}>
                            <span style={{ textAlign: 'left', color: '#888' }}>
                                Name   </span>
                            <input
                                className={"profileInput"}    
                                style={{ fontSize: '4vw' }}
                                margin="none"
                                placeholder="Enter name"
                                value={"Paras watts"}
                                
                            />
                            <img onClick={() => console.log("clicked")} src={edit} style={{ height: 20, width: 20, position: 'absolute', right: '5vw' }}></img>
                        </Box>
                        <Box className={"sampleBorderClass4"} style={{ flexDirection: 'column', marginLeft: '4vw', marginRight: '4vw', justifyContent: 'center', marginTop: '3vw' }}>

                            <span style={{ textAlign: 'left', color: '#888' }}>
                                Date of Birth   </span>
                            <input
                                className={"profileInput"}     
                                style={{ fontSize: '4vw' }}
                                margin="none"
                                placeholder="Enter name"
                                value="09/02/1990"
                                
                            />
<img onClick={() => console.log("clicked")} src={edit} style={{ height: 20, width: 20, position:'absolute',right:'5vw' }}></img>
                        </Box>
                        <Box className={"sampleBorderClass4"} style={{ flexDirection: 'column', marginLeft: '4vw', marginRight: '4vw', justifyContent: 'center', marginTop: '3vw' }}>

                            <span style={{ textAlign: 'left', color: '#888' }}>
                                User ID   </span>
                            <input
                            className={"profileInput"}     
                                style={{ fontSize: '4vw' }}
                                disabled
                                margin="none"
                                placeholder="Enter name"
                                value={"paraswatts"}
                            />


                        </Box>

                    </Box>

                </Box>
                <Box className={"sampleBorderClass3"} style={{ flexDirection: 'column' }}>
                    <span style={{ textAlign: 'left', fontWeight: 600, fontSize: '3vw', marginLeft: '4vw', marginTop: '4vw', marginBottom: '4vw' }}>PERSONAL INFORMATION</span>
                    <Box className={"sampleBorderClass4"} style={{ flexDirection: 'column', marginLeft: '4vw', marginRight: '4vw', justifyContent: 'center' }}>

                        <span style={{ textAlign: 'left', color: '#888' }}>
                            Email ID   </span>
                        <input
                             className={"profileInput"}     
                            style={{ fontSize: '4vw' }}
                            margin="none"
                            type="email"
                            placeholder="Enter name"
                            value={"paraswatts@gmail.com"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end" onClick={this.handleshowPassword}>
                                        <img onClick={() => console.log("clicked")} src={edit} style={{ height: 20, width: 20, marginLeft: 10, marginBottom: 5 }}></img>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <img onClick={() => console.log("clicked")} src={edit} style={{ height: 20, width: 20, position:'absolute',right:'5vw' }}></img>
                    </Box>
                    <Box className={"sampleBorderClass4"} style={{ flexDirection: 'column', marginLeft: '4vw', marginRight: '4vw', justifyContent: 'center', marginTop: '3vw' }}>

                        <span style={{ textAlign: 'left', color: '#888' }}>
                            Phone</span>
                        <input
                            className={"profileInput"}     
                            style={{ fontSize: '4vw', color: 'rgb(26,90,193)' }}
                            margin="none"
                            placeholder="Enter email"
                            value="+91 9876543210"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end" onClick={this.handleshowPassword}>
                                        <img onClick={() => console.log("clicked")} src={edit} style={{ height: 20, width: 20, marginLeft: 10, marginBottom: 5 }}></img>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <img onClick={() => console.log("clicked")} src={edit} style={{ height: 20, width: 20, position:'absolute',right:'5vw' }}></img>

                    </Box>
                    <Box className={"sampleBorderClass4"} style={{ flexDirection: 'column', marginLeft: '4vw', marginRight: '4vw', justifyContent: 'center', marginTop: '3vw' }}>

                        <span style={{ textAlign: 'left', color: '#888' }}>
                            Apartment</span>
                        <input
                            className={"profileInput"}     
                            style={{ fontSize: '4vw', }}
                            margin="none"
                            placeholder="Enter apartment"
                            value={"Royal Estate"}
                        

                        />
                    </Box>
                    <Box style={{ marginLeft: '4vw', marginTop: '3vw',width:'90%' }}>
                        <Box className={"sampleBorderClass4"} style={{ flexDirection: 'column',width:'49.5%' }}>

                            <span style={{ textAlign: 'left', color: '#888' }}>
                                Flat No.</span>
                            <input
                                className={"profileInput"}     
                                style={{ fontSize: '4vw'}}
                                margin="none"
                                placeholder="Enter flat no"
                                value={"J 523"}

                            />


                        </Box>
                        <Box  className={"sampleBorderClass4"} style={{ flexDirection: 'column',width:'49.5%',marginLeft:10}}>

                            <span style={{ textAlign: 'left', color: '#888' }}>
                                City</span>
                            <input
                            className={"profileInput"}     
                                style={{ fontSize: '4vw'}}
                                margin="none"
                                placeholder="Enter city"
                                value={"Chandigarh"}

                            />

                        </Box>
                    </Box>
                    <Box style={{ marginLeft: '4vw', marginTop: '3vw',width:'90%' }}>
                        <Box className={"sampleBorderClass4"} style={{ flexDirection: 'column',width:'49.5%' }}>

                            <span style={{ textAlign: 'left', color: '#888' }}>
                                State</span>
                            <input
                            className={"profileInput"}     
                                style={{ fontSize: '4vw'}}
                                margin="none"
                                placeholder="Enter state"
                                value={"Chandigarh"}

                            />


                        </Box>
                        <Box  className={"sampleBorderClass4"} style={{ flexDirection: 'column',width:'49.5%',marginLeft:10}}>

                            <span style={{ textAlign: 'left', color: '#888' }}>
                                Pin Code</span>
                            <input
                            className={"profileInput"}     
                                style={{ fontSize: '4vw'}}
                                margin="none"
                                placeholder="Enter pincode"

                            />

                        </Box>
                    </Box>
                </Box>
            </Box>
        );
    }
}
const styles = {
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

        color: 'white',

    },
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};
export default withRouter(MyProfile);