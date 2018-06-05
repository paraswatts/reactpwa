import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-bootstrap';
import './css/Login.css';
import Badge from '@material-ui/core/Badge';

import Box from 'react-layout-components'
import SvgIcon from '@material-ui/core/SvgIcon';
import logout from '../images/logout.svg'
import bell from '../images/bell.svg'

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
import ResidentDrawer from './ResidentDrawer';


import List from '@material-ui/core/List';

const RedBadge = withStyles(() => ({ badge: { backgroundColor: '#F00', color: '#fff', height: 20, width: 20, margin: 5 } }))(Badge);
// const Drawer = withStyles(() => ({ modal: { width: '80%' }, docked: {}, paper: { position: 'relative' } }))(SwipeableDrawer);
//className={"sampleBorderClass"}
class ResidentDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
            open: false
        };
    }

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

                <ResidentDrawer openDrawer={this.state.open} toggleDrawer={this.toggleDrawer.bind(this)} />
                <Box className={"sampleBorderClass"} style={{ position: 'fixed', width: '100%', height: '100%', flexDirection: 'column', }}>
                    <Box flex={1} justifyContent="space-between" alignItems="center" className={"dashboard-appbar"}>
                        <IconButton aria-label="Menu" >
                            <img src={require('../images/menu.png')} onClick={this.toggleDrawer(true)} style={{ width: 30, height: 15 }} />
                        </IconButton>

                        <span style={{ color: 'white', fontSize: '4.5vw' }}>HOME</span>
                        <div >
                            <IconButton aria-label="Menu">
                                <RedBadge badgeContent={4} >

                                    <img style={{ width: 20, height: 20 }} src={bell}>

                                    </img>
                                </RedBadge>

                            </IconButton>

                        </div>
                    </Box>
                    <Box flex={8} className={"sampleBorderClass"} style={{ width: '100%', alignSelf: 'center', flexDirection: 'column' }}>

                        <Box className={"sampleBorderClass"} style={{ flexDirection: 'row' }} flex={10 / 3}>
                            <Box className={"firstTile"} style={{ marginLeft: 20, marginBottom: 25, flexDirection: 'column' }} flex={1}>
                                <Link style={{ color: 'transparent', height: '100%', width: '100%' }} to="/PayBills">
                                    <Box className={"sampleBorderClass3"} style={{ width: '100%', height: '100%', flexDirection: 'column' }} >
                                        <Box flex={2} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'flex-end', marginRight: 10 }}>
                                            <span style={{ color: '#aaa', fontSize: '3.5vw' }}>Total:&nbsp;</span>
                                            <span style={{ color: 'rgb(0, 136, 198)', fontSize: '3.5vw' }}>315</span>

                                        </Box>
                                        <Box flex={5} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <img style={{ width: this.state.width / 5.5, height: this.state.width / 7 }} src={require('../images/profile.png')}></img>
                                        </Box>
                                        <Box flex={3} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '4vw', fontWeight: 500, color: '#000' }}>ALL CONTACTS</span></Box>

                                    </Box>
                                </Link>
                            </Box>
                            <Box className={"secondTile"} style={{ marginLeft: 10, marginRight: 20, marginBottom: 25, flexDirection: 'column' }} flex={1}>
                                <Link style={{ color: 'transparent', height: '100%', width: '100%' }} to="/PayBills">

                                    <Box className={"sampleBorderClass3"} style={{ width: '100%', height: '100%', flexDirection: 'column' }} flex={1}>
                                        <Box flex={2} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'flex-end', marginRight: 10 }}>
                                            <span style={{ color: '#aaa', fontSize: '3.5vw' }}>Total Outstanding:&nbsp;</span>
                                            <span style={{ color: 'rgb(237, 151, 52)', fontSize: '3.5vw' }}>$5000</span>

                                        </Box>
                                        <Box flex={5} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <img style={{ width: this.state.width / 5.5, height: this.state.width / 7 }} src={require('../images/paybills.png')}></img>
                                        </Box>
                                        <Box flex={3} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '4vw', fontWeight: 500, color: '#000' }}>PAY BILL</span></Box>

                                    </Box>
                                </Link>
                            </Box>
                        </Box>
                        <Box className={"sampleBorderClass"} style={{ flexDirection: 'row' }} flex={10 / 3}>
                            <Box className={"thirdTile"} style={{ marginLeft: 20, marginBottom: 25, flexDirection: 'column' }} flex={1}>
                                <Link style={{ color: 'transparent', height: '100%', width: '100%' }} to="/PayBills">

                                    <Box className={"sampleBorderClass3"} style={{ width: '100%', height: '100%', flexDirection: 'column' }}>
                                        <Box flex={2} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'flex-end', marginRight: 10 }}>
                                            <span style={{ color: '#aaa', fontSize: '3.5vw' }}>Month:&nbsp;</span>
                                            <span style={{ color: 'rgb(95, 36, 156)', fontSize: '3.5vw' }}>Jan 2018</span>

                                        </Box>
                                        <Box flex={5} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <img style={{ width: this.state.width / 7, height: this.state.width / 7 }} src={require('../images/bill.png')}></img>
                                        </Box>
                                        <Box flex={3} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'center' }}><span className={"sampleBorderClass"} style={{ fontSize: '4vw', fontWeight: 500, color: '#000' }}>BILL & RECEIPTS</span></Box>

                                    </Box>
                                </Link>
                            </Box>
                            <Box className={"fourthTile"} style={{ marginLeft: 10, marginRight: 20, marginBottom: 25, flexDirection: 'column' }} flex={1}>
                                <Link style={{ color: 'transparent', height: '100%', width: '100%' }} to="/PayBills">

                                    <Box className={"sampleBorderClass3"} style={{ width: '100%', height: '100%', flexDirection: 'column' }} >
                                        <Box flex={2} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'flex-end', marginRight: 10 }}>
                                            <span style={{ color: '#aaa', fontSize: '3.5vw' }}>Month:&nbsp;</span>
                                            <span style={{ color: 'rgb(23, 168, 13)', fontSize: '3.5vw' }}>Jan 2018</span>

                                        </Box>
                                        <Box flex={5} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                            <img style={{ width: this.state.width / 7.5, height: this.state.width / 7 }} src={require('../images/history.png')}></img>
                                        </Box>
                                        <Box flex={3} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}><span style={{ fontSize: '4vw', fontWeight: 500, color: '#000' }}>HISTORY</span></Box>

                                    </Box>
                                </Link>
                            </Box>
                        </Box>
                        <Box className={"sampleBorderClass"} style={{ flexDirection: 'row' }} flex={10 / 3}>
                            <Box className={"fifthTile"} style={{ marginLeft: 20, marginBottom: 35, flexDirection: 'column' }} flex={1}>
                                <Link style={{ color: 'transparent', height: '100%', width: '100%' }} to="/PayBills">

                                    <Box className={"sampleBorderClas3"} style={{ width: '100%', height: '100%', flexDirection: 'column' }} flex={1}>


                                        <Box flex={2} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'flex-end', marginRight: 10 }}>

                                        </Box>
                                        <Box flex={5} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <img style={{ width: this.state.width / 7, height: this.state.width / 7 }} src={require('../images/support.png')}></img>
                                        </Box>
                                        <Box flex={3} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: 16, fontWeight: 500, color: '#000' }}>SUPPORT 24X7</span></Box>

                                    </Box>
                                </Link>
                            </Box>
                            <Box className={"sixthTile"} style={{ marginLeft: 10, marginRight: 20, marginBottom: 35, flexDirection: 'column' }} flex={1}>
                                <Link className={"sampleBorderClass4"} style={{ color: 'transparent', height: '100%', width: '100%' }} to="/PayBills">

                                    <Box className={"sampleBorderClas3"} style={{ width: '100%', height: '100%', flexDirection: 'column' }} flex={1}>
                                        <Box flex={2} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'flex-end', marginRight: 10 }}>

                                        </Box>
                                        <Box flex={5} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'center' }}>
                                            <img style={{ width: this.state.width / 7, height: this.state.width / 7 }} src={require('../images/setting.png')}></img>
                                        </Box>
                                        <Box flex={3} className={"sampleBorderClass"} style={{ alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '4vw', fontWeight: 500, color: '#000' }}>SETTINGS</span></Box>

                                    </Box>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                    <Link style={{ color: 'transparent' }} to="/">

                        <Box className={"dashboard-logout"} justifyContent="center" alignItems="center" flex="0.5" style={{ padding: 10, width: '100%' }}>
                            <img style={{ width: 30, height: 30 }} src={logout}></img>

                            <span style={{ marginLeft: 10, color: '#203d8d', fontWeight: "bold" }}>LOGOUT</span></Box>
                    </Link>
                </Box>
                <Box style={{ backgroundColor: '#197fc7' }} flex="3" className={"dashboard-upper"}>
                </Box>
                <Box className={"dashboard-lower"} flex="7"></Box>

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
export default ResidentDashboard;