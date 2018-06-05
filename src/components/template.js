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
import DrawerCustom from './Drawer';


import List from '@material-ui/core/List';

const RedBadge = withStyles(() => ({ badge: { backgroundColor: '#F00', color: '#fff', height: 20, width: 20, margin: 5 } }))(Badge);
// const Drawer = withStyles(() => ({ modal: { width: '80%' }, docked: {}, paper: { position: 'relative' } }))(SwipeableDrawer);
//className={"sampleBorderClass"}
class AllContacts extends Component {
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
            open: open});
    };
    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
    }
    
   
    render() {
        return (
            <Box column width={this.state.width} height={this.state.height} className={"grid"}>
        
                <DrawerCustom openDrawer={this.state.open} toggleDrawer={this.toggleDrawer.bind(this)}/>
                
                <Box style={{ backgroundColor: '#197fc7',alignItems:'center',justifyContent:'center'}} flex="1" className={"dashboard-upper"}>
                
                    <Box  justifyContent="space-between" alignItems="center" className={"dashboard-appbar"}>
                        <IconButton aria-label="Menu" >
                            <img src={require('../images/menu.png')} onClick={this.toggleDrawer(true)} style={{ width: 30, height: 15 }} />
                        </IconButton>

                        <span style={{ color: 'white', fontSize: 16 }}>SOCIETY: ROYAL ESTATE</span>
                        <div >
                            <IconButton aria-label="Menu">
                                <RedBadge badgeContent={4} >

                                    <img style={{ width: 20, height: 20 }} src={bell}>

                                    </img>
                                </RedBadge>

                            </IconButton>

                        </div>
                    </Box>
               
                </Box>
                <Box className={"dashboard-lower"} flex="9"></Box>

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
export default AllContacts;