import React, { Component } from 'react';
import { Link,Redirect } from "react-router-dom";
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
import contacts from '../images/phone-book.svg';
import reports from '../images/newspaper.svg';
import accounts from '../images/three-buildings.svg';
import documents from '../images/folder.svg';
import revenue from '../images/bar.svg';
import settings from '../images/setting.svg';
import social from '../images/network.svg';
import log from '../images/log.svg';
import plus from '../images/add.svg';
import Avatar from '@material-ui/core/Avatar';

import Box from 'react-layout-components'


import List from '@material-ui/core/List';

const Drawer = withStyles(() => ({ modal: { width: '75vw' }, docked: {width: '75vw'}, paper: { position: 'relative' } }))(SwipeableDrawer);
//className={"sampleBorderClass"}
class DrawerCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
            open: this.props.openDrawer?this.props.openDrawer:false,
            redirect:false
        }
    }
    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
        console.log(window.innerHeight + 'px', window.innerWidth);
    }
    
    handleOnClick = (path) => {
        // some action...
        // then redirect
        this.setState({redirect: true,path:path});
      }
      
   
    render() {
        if (this.state.redirect) {
            return <Redirect push to={`${this.state.path}`}/>;
          }
        return (
                <Drawer
                    // className={"sampleBorderClass2"}
                    open={this.props.openDrawer}
                    anchor="left"
                    ModalProps={{}}
                    onClose={this.props.toggleDrawer(false)}
                    onOpen={this.props.toggleDrawer(this.props.openDrawer?this.props.openDrawer:true)}
                >
                    <Box flex={10} style={{ background: '#fff', flexDirection: 'column', width: '100%' }} className={"sampleBorderClass"}
                    >
                        <Box flex={2.8} className={"sampleBorderClass2"}>
                            <Box >
                                <img src={require('../images/images.jpg')} ></img>
                            </Box>
                            <Box className={"sampleBorderClass3"} style={{
                                width: '100%', position: 'absolute',
                                height: '28%',
                                background: 'rgba(20, 13, 40,0.9)',
                                flexDirection: 'column'
                            }}>
                                  <Avatar className={"profileImage"} style={{
                                    height: 70,
                                    width: 70, borderRadius: '50%', marginLeft: 20,marginTop:30,marginBottom:20
                                }} alt="User" src={require("../images/building.jpg")}  />

                                <span style={{ color: '#fff', marginLeft: 30, fontSize: '4vw' }}>ROYAL ESTATE</span>
                                <span style={{ color: '#fff', fontSize: '3.5vw', marginLeft: 30, marginTop: 10 }}>Super Admin</span>

                            </Box>
                        </Box>

                        <Box flex={7.5} className={"sampleBorderClass4"}>

                            <List className={"sampleBorderClass3"} style={{width:'100%'}} >
                                <ListItem onClick={()=>this.handleOnClick("/SocietyDashboard")}>
                                {/* <Link className={"sampleBorderClass3"} style={{color:'transparent'}}> */}

                                    <ListItemIcon>
                                        <img src={dashboard} style={{ height: 20, width: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText> 
                                        Dashboard

                                    </ListItemText>
                                {/* </Link> */}

                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <ListItemIcon >
                                        <img src={activities} style={{ height: 20, width: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText> Activities</ListItemText>
                                </ListItem>
                                <Divider />

                                <ListItem onClick={()=>this.handleOnClick("/AllAccounts")}>
                                    <ListItemIcon >
                                        <img src={accounts} style={{ height: 20, width: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText >Accounts</ListItemText>
                                    <ListItemIcon>
                                        <img src={plus} style={{ height: 20, width: 20, marginRight: 0 }} />
                                    </ListItemIcon>
                                </ListItem>
                                <Divider />

                                <ListItem onClick={this.handleOnClick.bind(this,"/AllMembers")}>
                                    <ListItemIcon>
                                        <img src={contacts} style={{ height: 20, width: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText> Contacts</ListItemText>
                                </ListItem>
                                <Divider />

                                <ListItem onClick={this.handleOnClick.bind(this,"/AllBills")}>
                                    <ListItemIcon>
                                        <img src={bill} style={{ height: 20, width: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText> Bills</ListItemText>
                                </ListItem>
                                <Divider />

                                <ListItem>
                                    <ListItemIcon>
                                        <img src={reports} style={{ height: 20, width: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText> Reports</ListItemText>
                                </ListItem>
                                <Divider />

                                <ListItem>
                                    <ListItemIcon>
                                        <img src={documents} style={{ height: 20, width: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText> Documents</ListItemText>
                                </ListItem>
                                <Divider />

                                <ListItem>
                                    <ListItemIcon>
                                        <img src={revenue} style={{ height: 20, width: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText> Revenue</ListItemText>
                                </ListItem>
                                <Divider />

                                <ListItem>
                                    <ListItemIcon>
                                        <img src={social} style={{ height: 20, width: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText> Social</ListItemText>
                                </ListItem>
                                <Divider />

                                <ListItem>
                                    <ListItemIcon>
                                        <img src={settings} style={{ height: 20, width: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText> Settings</ListItemText>
                                </ListItem>
                                <Divider />

                                <ListItem onClick={this.handleOnClick.bind(this,"/")}>
                                    <ListItemIcon>
                                        <img src={log} style={{ height: 20, width: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText> Logout</ListItemText>
                                </ListItem>

                            </List>

                        </Box>
                    </Box>
                </Drawer>
               
        );
    }
}

export default DrawerCustom;