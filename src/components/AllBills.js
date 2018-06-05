import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-bootstrap';
import './css/Login.css';
import Badge from '@material-ui/core/Badge';

import Box from 'react-layout-components';
import SvgIcon from '@material-ui/core/SvgIcon';
import logout from '../images/logout.svg';
import bell from '../images/bell.svg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import InboxIcon from '@material-ui/icons/Inbox';
import dashboard from '../images/speedometer.svg';
import activities from '../images/ecg-lines.svg';
import bill from '../images/invoice.svg';
import contacts from '../images/phone-book.svg';
import reports from '../images/newspaper.svg';
import accounts from '../images/three-buildings.svg';
import documents from '../images/folder.svg';
import revenue from '../images/bar.svg';
import settings from '../images/setting.svg';
import social from '../images/network.svg';
import log from '../images/log.svg';
import plus from '../images/add.svg';
import menu from '../images/menudots.svg';

import DrawerCustom from './Drawer';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import List from '@material-ui/core/List';

const RedBadge = withStyles(() => ({ badge: { backgroundColor: '#F00', color: '#fff', height: 20, width: 20, margin: 5 } }))(Badge);
// const Drawer = withStyles(() => ({ modal: { width: '80%' }, docked: {}, paper: { position: 'relative' } }))(SwipeableDrawer);
//
const allBills = [{
    billName: 'Electricity bills & Surcharges',
    received: '₹265',
    duePayment: '₹265',

}, {
    billName: 'Meter Rent',
    received: '₹265',
    duePayment: '₹265',

}, {
    billName: 'Maintenance',
    received: '₹265',
    duePayment: '₹265',

}, {
    billName: 'Ground rent charges',
    received: '₹265',
    duePayment: '₹265',

}, {
    billName: 'Water bill',
    received: '₹265',
    duePayment: '₹265',

}, {
    billName: 'Miscellaneous Charges',
    received: '₹265',
    duePayment: '₹265',

}, {
    billName: 'Civil works',
    received: '₹265',
    duePayment: '₹265',

}, {
    billName: 'Building maintenance charges',
    received: '₹265',
    duePayment: '₹265',

}, {
    billName: 'Parking charges',
    received: '₹265',
    duePayment: '₹265',

}, {
    billName: 'Interest on payment past due date',
    received: '₹265',
    duePayment: '₹265',

}];

class AllBills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
            open: false,
            anchorEl: null,

        };
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
    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
    }


    render() {
        return (
            <Box column width={this.state.width} height={this.state.height} className={"grid"}>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem style={{ padding: 5 }} onClick={this.handleClose}>View Profile</MenuItem>
                    <MenuItem style={{ padding: 5 }} onClick={this.handleClose}>Payment Reminder</MenuItem>
                    <MenuItem style={{ padding: 5 }} onClick={this.handleClose}>Edit</MenuItem>
                    <MenuItem style={{ padding: 5 }} onClick={this.handleClose}>History</MenuItem>
                    <MenuItem style={{ padding: 5 }} onClick={this.handleClose}>Delete</MenuItem>
                </Menu>
                <DrawerCustom openDrawer={this.state.open} toggleDrawer={this.toggleDrawer.bind(this)} />
                <Box className={"sampleBorderClass"} flex={0.8}  style={{ width: '100%', height: '10vh' }}>
                    {/* <Box flex={10} style={{position:'fixed',width:'100%',zIndex:100, backgroundColor: '#197fc7', alignItems: 'center', justifyContent: 'center' }} className={"dashboard-upper"}> */}

                    <Box className={"sampleBorderClass4"} style={{ position: 'fixed', width: '100%', zIndex: 100, backgroundColor: '#197fc7', alignItems: 'center', justifyContent: 'space-between',height: '10vh' }} >
                        <IconButton aria-label="Menu" >
                            <img src={require('../images/menu.png')} onClick={this.toggleDrawer(true)} style={{ width: 30, height: 15 }} />
                        </IconButton>

                        <span style={{ color: 'white', fontSize: '4vw' }}>BILLS</span>
                        <div >
                            <IconButton aria-label="Menu">
                                <RedBadge badgeContent={4} >

                                    <img style={{ width: 20, height: 20 }} src={bell}>

                                    </img>
                                </RedBadge>

                            </IconButton>

                        </div>
                        {/* </Box> */}

                    </Box>

                </Box>
                <Box className={"sampleBorderClass"} flex={0.4}  style={{ width: '100%',height:'5vh' }}>
                    {/* <Box flex={10} style={{position:'fixed',width:'100%',zIndex:100, backgroundColor: '#197fc7', alignItems: 'center', justifyContent: 'center' }} className={"dashboard-upper"}> */}

                    <Box className={"sampleBorderClass3"} style={{ position: 'fixed', width: '100%', height: '5vh', zIndex: 100, background: '#f6f3f3', flexDirection: 'column' }} 
                    >

                        <Box className={"billHeader"} style={{ flexDirection: 'row' }}>
                            <ListItem  style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 0, paddinRight: 0, width: '100vw', }} >
                                <Box className={""} style={{ width: '100% ', alignItems: 'center' }}>
                                    <Box flex={5.5} >
                                        <span style={{ fontSize: '3.5vw', marginLeft: 10 }}>Bill</span>
                                    </Box>
                                    <Box  flex={2}>
                                        <span style={{ fontSize: '3.5vw', marginLeft: 10 }} className={"sampleBorderClass5"}>Received</span>
                                    </Box>
                                    <Box  flex={2.8}>
                                        <span style={{ fontSize: '3.5vw', marginLeft: 10 }}>Due payment</span>
                                    </Box>

                                    <Box  flex={0.5}>
                                    </Box>
                                </Box>
                            </ListItem>
                        </Box>
                    </Box>

                </Box>
                <Box className={"sampleBorderClass4"} flex="7"  >
                    
                        <List
                            className={"dashboard-lower"}
                            style={{ width: '100%', background: '#f6f3f3' }}
                        >
                            {
                                allBills.map((billObj, index) =>
                                    <ListItem  style={{ padding: 0, width: '100vw' ,marginTop:10,marginBottom:10}} key={index}>
                                        <Box  style={{ width: '100% ' }}>
                                            <Box flex={5.5} >
                                                <span style={{ color: 'rgb(83,88,94)', fontSize: '3.5vw', marginLeft: 10, marginBottom:10 , marginTop: 10 }}>{billObj.billName}</span>
                                            </Box>
                                            <Box  flex={2}>
                                                <span style={{ color: 'rgb(255,0,0)', fontSize: '3.5vw', marginTop:10,marginBottom: 10, marginLeft: 10 }}>{billObj.received}</span>
                                            </Box>
                                            <Box  flex={2.8}>
                                                <span style={{ color: 'rgb(255,0,0)', fontSize: '3.5vw', marginBottom: 10, marginLeft: 10,marginTop:10 }}>{billObj.duePayment}</span>
                                            </Box>

                                            <Box  flex={0.5} onClick={this.handleClick}>
                                                <img src={menu} style={{ height: 15, width: 15, marginTop:10,marginBottom:10,marginRight: 10 }}></img>
                                            </Box>
                                        </Box>
                                    </ListItem>
                                )
                            }
                        </List>
                </Box>
                <Box  className={"tableHeader"} style={{ backgroundColor: '#f6f3f3',flexDirection:'column',position:'fixed',zIndex:100,bottom:0,height:'15vh',width:'100vw' }} flex={1.5}>

                        <Box  flex={10/3} style={{marginLeft:10,marginRight:10}}>
                            <Box flex="8" style={{alignItems:'center'}} >
                                <span  style={{fontSize:'4vw'}}>Total bill payments this month</span>
                            </Box>
                            <Box style={{alignItems:'center'}} flex="2">
                                <span style={{fontSize:'4vw'}} >₹1255320.00</span>
                            </Box>
                        </Box>
                        <Box flex={10/3} style={{marginLeft:10,marginRight:10}}>
                            <Box style={{alignItems:'center'}} flex={8} >
                                <span style={{fontSize:'4vw'}} >Received</span>
                            </Box>
                            <Box style={{alignItems:'center'}} flex={2} >
                                <span style={{fontSize:'4vw'}} >₹1051000.00</span>
                            </Box>
                        </Box>
                        <Box  style={{marginLeft:10,marginRight:10}} flex={10/3}>
                            <Box style={{alignItems:'center'}} flex={8} >
                                <span style={{fontSize:'4vw'}} >Total due payment</span>
                            </Box>
                            <Box style={{alignItems:'center'}} flex={2} >
                                <span style={{fontSize:'4vw'}} >₹1051000.00</span>
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
export default AllBills;