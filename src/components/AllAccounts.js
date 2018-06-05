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
import menu from '../images/menu.svg';

import DrawerCustom from './Drawer';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import List from '@material-ui/core/List';

const RedBadge = withStyles(() => ({ badge: { backgroundColor: '#F00', color: '#fff', height: 20, width: 20, margin: 5 } }))(Badge);
// const Drawer = withStyles(() => ({ modal: { width: '80%' }, docked: {}, paper: { position: 'relative' } }))(SwipeableDrawer);
//className={"sampleBorderClass"}
const allAccounts = [{
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Kit House Homes Prefabricated',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Kit House Homes Prefabricated',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Kit House Homes Prefabricated',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Kit House Homes Prefabricated',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Kit House Homes Prefabricated',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Kit House Homes Prefabricated',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Kit House Homes Prefabricated',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
}, {
    societyName: 'Royal Estate',
    totalFlat: '365',
    onRent: '320',
    
},];

class AllAccounts extends Component {
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
                    <MenuItem style={{padding:5}} onClick={this.handleClose}>View Profile</MenuItem>
                    <MenuItem style={{padding:5}} onClick={this.handleClose}>Payment Reminder</MenuItem>
                    <MenuItem style={{padding:5}} onClick={this.handleClose}>Edit</MenuItem>
                    <MenuItem style={{padding:5}} onClick={this.handleClose}>History</MenuItem>
                    <MenuItem style={{padding:5}} onClick={this.handleClose}>Delete</MenuItem>
                </Menu>
                <DrawerCustom openDrawer={this.state.open} toggleDrawer={this.toggleDrawer.bind(this)} />
                <Box flex={1} className={"sampleBorderClass"} style={{  width: '100%', }}>
                    {/* <Box flex={10} style={{position:'fixed',width:'100%',zIndex:100, backgroundColor: '#197fc7', alignItems: 'center', justifyContent: 'center' }} className={"dashboard-upper"}> */}

                    <Box style={{ position: 'fixed', width: '100%', height: '10vh', zIndex: 100, backgroundColor: '#197fc7', alignItems: 'center', justifyContent: 'space-between' }} >
                        <IconButton aria-label="Menu" >
                            <img src={require('../images/menu.png')} onClick={this.toggleDrawer(true)} style={{ width: 30, height: 15 }} />
                        </IconButton>

                        <span style={{ color: 'white', fontSize: '4vw' }}>ACCOUNTS</span>
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
                <Box flex={1} className={"sampleBorderClass"} style={{ width: '100%', }}>
                    {/* <Box flex={10} style={{position:'fixed',width:'100%',zIndex:100, backgroundColor: '#197fc7', alignItems: 'center', justifyContent: 'center' }} className={"dashboard-upper"}> */}

                    <Box style={{ position: 'fixed', width: '100%', height: '10vh', zIndex: 100, background: '#f6f3f3', flexDirection: 'column' }} className={"sampleBorderClass4"}
                    >
                        <Box className={"sampleBorderClass4"} style={{
                            margin: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <span className={"sampleBorderClass4"} style={{ alignSelf: 'center' }}>ALL ACCOUNTS</span>
                            <button className={"button"} style={{ backgroundColor: 'rgb(26,90,193)', paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5, borderRadius: 15, color: '#fff', fontSize: '3.5vw', alignSelf: 'center', textAlign: 'center' }}>Create New</button>
                        </Box>
                        <Box className={"tableHeader"} style={{ flexDirection: 'row' }}>
                            <ListItem className={"sampleBorderClass"} style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 0, paddinRight: 0, width: '100vw', }} >
                                <Box className={""} style={{ width: '100% ', alignItems: 'center' }}>
                                    <Box flex={5.5} className={"sampleBorderClass3"}>
                                        <span style={{ fontSize: '3.5vw', marginLeft: 10 }}>Name</span>
                                    </Box>
                                    <Box className={"sampleBorderClass3"} flex={2.5}>
                                        <span style={{ fontSize: '3.5vw', marginLeft: 10 }} className={"sampleBorderClass5"}>Total Flats</span>
                                    </Box>
                                    <Box className={"sampleBorderClass3"} flex={2}>
                                        <span style={{ fontSize: '3.5vw', marginLeft: 10 }}>On Rent </span>
                                    </Box>
                                
                                    <Box className={"sampleBorderClass3"} flex={0.5}>
                                    </Box>
                                </Box>
                            </ListItem>
                        </Box>
                    </Box>

                </Box>
                <Box flex="8">
                    <Box  style={{ width: '100%', margin: 0,background:'#f6f3f3' }}
 >
                        <List
                            className={"dashboard-lower"}
                            style={{ width: '100%', margin: 0,background:'#f6f3f3' }}
                        >
                            {
                                allAccounts.map((memberObj, index) =>
                                    <ListItem className={"sampleBorderClass"} style={{ padding: 0, width: '100vw' }} key={index}>
                                        <Box className={"sampleBorderClass3"} style={{ width: '100% ' }}>
                                            <Box flex={5.5} className={"sampleBorderClass3"}>
                                                <span style={{ color: 'rgb(26,90,193)', fontSize: '3.5vw', marginLeft: 10, marginBottom: 10, marginLeft: 10 }}>{memberObj.societyName}</span>
                                            </Box>
                                            <Box className={"sampleBorderClass3"} flex={2.5}>
                                                <span style={{ fontSize: '3.5vw', marginBottom: 10, marginLeft: 10 }}>{memberObj.totalFlat}</span>
                                            </Box>
                                            <Box className={"sampleBorderClass3"} flex={2}>
                                                <span style={{ fontSize: '3.5vw', marginBottom: 10, marginLeft: 10 }}>{memberObj.onRent}</span>
                                            </Box>
                                            
                                            <Box className={"sampleBorderClass3"} flex={0.5} onClick={this.handleClick}>
                                                <img src={menu} style={{ height: 15, width: 15, marginRight: 10 }}></img>
                                            </Box>
                                        </Box>
                                    </ListItem>
                                )
                            }
                        </List>
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
export default AllAccounts;