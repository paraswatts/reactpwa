import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import './css/Login.css';


import { withStyles } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import dashboard from '../images/speedometer.svg';
import activities from '../images/ecg-lines.svg';
import bill from '../images/invoice.svg';
import invoice from '../images/invoice1.svg';

import contacts from '../images/phone-book.svg';
import reports from '../images/newspaper.svg';
import settings from '../images/settings.svg';
import history from '../images/history.svg';
import revenue from '../images/bar.svg';
import chat from '../images/chat.svg';
import social from '../images/network.svg';
import notification from '../images/notification.svg';
import profile from '../images/profile.svg';
import Avatar from '@material-ui/core/Avatar';

import Box from 'react-layout-components'


import List from '@material-ui/core/List';

const Drawer = withStyles(() => ({ modal: { width: '75vw' }, docked: { width: '75vw' }, paper: { position: 'relative' } }))(SwipeableDrawer);
//className={"sampleBorderClass"}
class ResidentDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
            open: this.props.openDrawer ? this.props.openDrawer : false,
            redirect: false
        }
    }
    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
        console.log(window.innerHeight + 'px', window.innerWidth);
    }

    handleOnClick = (path) => {
        // some action...
        // then redirect
        this.setState({ redirect: true, path: path });
    }


    render() {
        if (this.state.redirect) {
            return <Redirect push to={`${this.state.path}`} />;
        }
        return (
            <Drawer
                // className={"sampleBorderClass2"}
                open={this.props.openDrawer}
                anchor="left"
                ModalProps={{}}
                onClose={this.props.toggleDrawer(false)}
                onOpen={this.props.toggleDrawer(this.props.openDrawer ? this.props.openDrawer : true)}
            >
                <Box flex={10} style={{ background: '#fff', flexDirection: 'column', width: '100%' }} className={"sampleBorderClass"}
                >
                    <Box flex={2.8} className={"sampleBorderClass2"}>
                        <Box  >
                            <img src={require('../images/images.jpg')} ></img>
                        </Box>
                        <Box className={"sampleBorderClass3"} style={{
                            width: '100%', position: 'absolute',
                            height: '28%',
                            background: '#197fc7ee',
                            flexDirection: 'column'
                        }}>
                            <Box justifyContent={"space-between"}>
                                <Avatar className={"profileImage"} style={{
                                    height: 70,
                                    width: 70, borderRadius: '50%', marginLeft: 20, marginTop: 30, marginBottom: 20
                                }} alt="User" src={require("../images/building.jpg")} />
                                <Box style={{ alignItems: 'center', marginRight: 20 }} className={"sampleBorderClass3"}><img src={settings} style={{ height: 20, width: 20 }} /></Box>
                            </Box>
                            <span style={{ color: '#fff', marginLeft: 30, fontSize: '4vw' }}>MANJIT SINGH</span>
                            <span style={{ color: '#fff', fontSize: '3.5vw', marginLeft: 30, marginTop: 10 }}>manjirsingh82@gmail.com</span>

                        </Box>
                    </Box>

                    <Box flex={7.5} className={"sampleBorderClass4"}>

                        <List className={"sampleBorderClass3"} style={{ width: '100%' }} >
                            <ListItem onClick={() => this.handleOnClick("/ResidentDashboard")}>
                                {/* <Link className={"sampleBorderClass3"} style={{color:'transparent'}}> */}

                                <ListItemIcon>
                                    <img src={dashboard} style={{ height: 20, width: 20 }} />
                                </ListItemIcon>
                                <ListItemText>
                                    Dashboard

                                    </ListItemText>
                                {/* </Link> */}

                            </ListItem>

                            <ListItem onClick={this.handleOnClick.bind(this, "/MyProfile")}>
                                <ListItemIcon >
                                    <img src={profile} style={{ height: 20, width: 20 }} />
                                </ListItemIcon>
                                <ListItemText>Profile</ListItemText>
                            </ListItem>


                            <ListItem >
                                <ListItemIcon >
                                    <img src={notification} style={{ height: 20, width: 20 }} />
                                </ListItemIcon>
                                <ListItemText >Notification</ListItemText>

                            </ListItem>


                            <ListItem onClick={this.handleOnClick.bind(this,"/PayBills")}>
                                <ListItemIcon>
                                    <img src={bill} style={{ height: 20, width: 20 }} />
                                </ListItemIcon>
                                <ListItemText>Pay Bills</ListItemText>
                            </ListItem>


                            <ListItem onClick={this.handleOnClick.bind(this,"/PayBills")}>
                                <ListItemIcon>
                                    <img src={invoice} style={{ height: 20, width: 20 }} />
                                </ListItemIcon>
                                <ListItemText>Invoice</ListItemText>
                            </ListItem>


                            <ListItem>
                                <ListItemIcon>
                                    <img src={history} style={{ height: 20, width: 20 }} />
                                </ListItemIcon>
                                <ListItemText>Last 3 month bill history</ListItemText>
                            </ListItem>


                            <ListItem>
                                <ListItemIcon>
                                    <img src={chat} style={{ height: 20, width: 20 }} />
                                </ListItemIcon>
                                <ListItemText> Chat/Support</ListItemText>
                            </ListItem>


                            <ListItem>
                                <ListItemIcon>
                                    <img src={social} style={{ height: 20, width: 20 }} />
                                </ListItemIcon>
                                <ListItemText> Social</ListItemText>
                            </ListItem>



                        </List>

                    </Box>
                </Box>
            </Drawer>

        );
    }
}

export default ResidentDrawer;