import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
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
import { withStyles, createMuiTheme, MuiThemeProvider, TextField, } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import menu from '../images/menu.svg';
import cancel from '../images/cancel.svg';

import DrawerCustom from './Drawer';
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


class GenerateBills extends Component {
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
            <Dialog
            className={"sampleBorderClass4"}
            open={this.state.dialogOpen}
            onClose={this.handleDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
                >
                      <img onClick={this.handleDialogClose} src={cancel} style={{ marginTop: '4vw', height: "5vw", width:  "5vw", alignSelf: 'flex-end',marginRight:'3vw' }}></img>
          
            <img src={require('../images/draft.png')} style={{ marginTop: 10, height: 90, width: 90, alignSelf: 'center' }}></img>

           
            <DialogActions style={{ alignItems: 'center', justifyContent: 'center', marginTop: '2vw', marginBottom: '5vw',flexDirection:'column' }}>
              <span style={{ textAlign: 'center',width:'70vw',marginTop:'4vw',marginLeft:'5vw',marginRight:'5vw' ,paddingTop:'1.5vw',paddingBottom:'1.5vw' }} className={"buttonDialogSave"} onClick={this.handleDialogClose}>
                SAVE AS DRAFT
            </span>

              <span style={{ textAlign: 'center',marginTop:'2vw',width:'70vw',paddingTop:'1.5vw',paddingBottom:'1.5vw' }} className={"buttonDialogSend"} onClick={this.handleDialogClose}>
                SAVE AND SEND TO MEMBER
            </span>

            </DialogActions>
          </Dialog>    
                <DrawerCustom openDrawer={this.state.open} toggleDrawer={this.toggleDrawer.bind(this)} />

                {/* <Box flex={10} style={{position:'fixed',width:'100%',zIndex:100, backgroundColor: '#197fc7', alignItems: 'center', justifyContent: 'center' }} className={"dashboard-upper"}> */}
                <Box style={{ paddingTop: '2.5vw', paddingBottom: '2.5vw', width: '100%', zIndex: 100, backgroundColor: 'rgb(4,178,216)', alignItems: 'center', justifyContent: 'space-between' }} >
                    <IconButton aria-label="Menu" >
                        <img src={require('../images/menu.png')} onClick={this.toggleDrawer(true)} style={{ width: 30, height: 15 }} />                    </IconButton>
                    <span style={{ color: 'white', fontSize: '5vw' }}>GENERATE BILL</span>
                    <div >
                        <IconButton aria-label="Menu" onClick={this.handleDialogClickOpen}>
                            <img style={{ width: 20, height: 20 }} src={tick}>
                            </img>
                        </IconButton>
                    </div>
                    {/* </Box> */}
                </Box>


                <Box style={{ flexDirection: 'column' }}>
                    <span style={{ fontWeight: 600, fontSize: '4vw', margin: '2vw' }}>SANSAD VIHAR CO-OPERATIVE GROUP<br /> HOUSING SOCIETY LTD.</span>
                    <span style={{ fontWeight: 600, fontSize: '3vw', marginLeft: '2vw', marginRight: '2vw' }}>Plot No.02, Sector 3, Dwarka, Phase-1,<br />New Delhi-110078</span>
                </Box>
                <Box className={"sampleBorderClass3"} style={{ marginLeft: '2vw', marginRight: '2vw' }}>

                    <Box className={"sampleBorderClass"} style={{ flexDirection: 'column', width: '100%' }}>
                        <Box style={{ width: '98%', marginTop: '2VW' }}>
                            <Box flex={1} className={"sampleBorderClass4"} style={{ width: '50%', flexDirection: 'column', justifyContent: 'center', marginRight: '2vw' }}>
                                <span style={{ textAlign: 'left', color: '#888' }}>
                                    Month & year   </span>
                                <input
                                    className={"profileInputBill"}
                                    style={{ fontSize: '4vw', marginTop: '1vw' }}
                                    margin="none"
                                    placeholder="dd/mm/yyyy"

                                />

                            </Box>

                            <Box flex={1} className={"sampleBorderClass4"} style={{ width: '50%', flexDirection: 'column', justifyContent: 'center' }}>
                                <span style={{ textAlign: 'left', color: '#888' }}>
                                    Bill No.   </span>
                                <input
                                    className={"profileInputBill"}
                                    style={{ fontSize: '4vw', marginTop: '1vw' }}
                                    margin="none"
                                    placeholder="#J 2238"
                                    value={"Paras watts"}

                                />

                            </Box>
                        </Box>
                        <Box style={{ width: '98%', marginTop: '2VW' }}>
                            <Box flex={1} className={"sampleBorderClass4"} style={{ width: '50%', flexDirection: 'column', justifyContent: 'center', marginRight: '2vw' }}>
                                <span style={{ textAlign: 'left', color: '#888' }}>
                                    Date of bill   </span>
                                <input
                                    className={"profileInputBill"}
                                    style={{ fontSize: '4vw', marginTop: '1vw' }}
                                    margin="none"
                                    placeholder="dd/mm/yyyy"

                                />

                            </Box>

                            <Box flex={1} className={"sampleBorderClass4"} style={{ width: '50%', flexDirection: 'column', justifyContent: 'center' }}>
                                <span style={{ textAlign: 'left', color: '#888' }}>
                                    Pay be date   </span>
                                <input
                                    className={"profileInputBill"}
                                    style={{ fontSize: '4vw', marginTop: '1vw' }}
                                    margin="none"
                                    placeholder="dd/mm/yy"
                                    value={"Paras watts"}

                                />

                            </Box>
                        </Box>
                        <Box style={{ width: '98%', marginTop: '2VW' }}>
                            <Box flex={1} className={"sampleBorderClass4"} style={{ width: '50%', flexDirection: 'column', justifyContent: 'center', marginRight: '2vw' }}>
                                <span style={{ textAlign: 'left', color: '#888' }}>
                                    Name   </span>
                                <input
                                    className={"profileInputBill"}
                                    style={{ fontSize: '4vw', marginTop: '1vw' }}
                                    margin="none"
                                    placeholder="Vikas Sharma"

                                />

                            </Box>

                            <Box flex={1} className={"sampleBorderClass4"} style={{ width: '50%', flexDirection: 'column', justifyContent: 'center' }}>
                                <span style={{ textAlign: 'left', color: '#888' }}>
                                    FlatNo.   </span>
                                <input
                                    className={"profileInputBill"}
                                    style={{ fontSize: '4vw', marginTop: '1vw' }}
                                    margin="none"
                                    placeholder="#J 2238"
                                    value={"Paras watts"}

                                />

                            </Box>
                        </Box>




                        <Box className={"sampleBorderClass4"} style={{ flexDirection: 'column', justifyContent: 'center', marginTop: '2vw'  }}>

                            <span style={{ textAlign: 'left', color: '#888' }}>
                                Meter No.   </span>
                            <input
                                className={"profileInputBill"}
                                style={{ fontSize: '4vw', marginTop: '1vw' }}
                                margin="none"
                                type="email"
                                placeholder="00452658"

                            />

                        </Box>
                        <Box style={{ width: '98%', marginTop: '2VW' }}>
                            <Box className={"sampleBorderClass4"} style={{ width: '50%', flexDirection: 'column', justifyContent: 'center' }}>
                                <span style={{ textAlign: 'left', color: '#888' }}>
                                    Previous reading   </span>

                            </Box>

                            <Box className={"sampleBorderClass4"} style={{ width: '50%', flexDirection: 'column', justifyContent: 'center', marginLeft: '3.5vw' }}>
                                <span style={{ textAlign: 'left', color: '#888' }}>
                                    Current reading</span>


                            </Box>
                        </Box>
                        <Box style={{ width: '100%', marginTop: '2VW' }}>

                            <Box style={{ width: '49%' }}>

                                <Box flex={1} className={"sampleBorderClass4"} style={{ width: '25%', flexDirection: 'column', justifyContent: 'center', marginRight: '2vw' }}>
                                    <span style={{ textAlign: 'left', color: '#888' }}>
                                        Date   </span>
                                    <input
                                        className={"profileInputBill"}
                                        style={{ fontSize: '4vw', marginTop: '1vw' }}
                                        margin="none"
                                        placeholder="mm/dd/yyyy"

                                    />

                                </Box>

                                <Box flex={1} className={"sampleBorderClass4"} style={{ width: '25%', flexDirection: 'column', justifyContent: 'center' }}>
                                    <span style={{ textAlign: 'left', color: '#888' }}>
                                        Units   </span>
                                    <input
                                        className={"profileInputBill"}
                                        style={{ fontSize: '4vw', marginTop: '1vw' }}
                                        margin="none"
                                        placeholder="545"

                                    />

                                </Box>
                            </Box>
                            <Box style={{ width: '51%' }}>
                                <Box flex={1} className={"sampleBorderClass4"} style={{ width: '25%', flexDirection: 'column', justifyContent: 'center', marginRight: '2vw', marginLeft: '2vw' }}>
                                    <span style={{ textAlign: 'left', color: '#888' }}>
                                        Date   </span>
                                    <input
                                        className={"profileInputBill"}
                                        style={{ fontSize: '4vw', marginTop: '1vw' }}
                                        margin="none"
                                        placeholder="mm/dd/yyyy"

                                    />

                                </Box>

                                <Box flex={1} className={"sampleBorderClass4"} style={{ width: '25%', flexDirection: 'column', justifyContent: 'center' }}>
                                    <span style={{ textAlign: 'left', color: '#888' }}>
                                        Units   </span>
                                    <input
                                        className={"profileInputBill"}
                                        style={{ fontSize: '4vw', marginTop: '1vw' }}
                                        margin="none"
                                        placeholder="600"

                                    />

                                </Box>
                            </Box>
                        </Box>
                        <Box style={{ width: '98%', marginTop: '2VW' }}>
                            <Box flex={1} className={"sampleBorderClass4"} style={{ width: '50%', flexDirection: 'column', justifyContent: 'center', marginRight: '2vw' }}>
                                <span style={{ textAlign: 'left', color: '#888' }}>
                                    Chargable units   </span>
                                <input
                                    className={"profileInputBill"}
                                    style={{ fontSize: '4vw', marginTop: '1vw' }}
                                    margin="none"
                                    placeholder="545"

                                />

                            </Box>

                            <Box flex={1} className={"sampleBorderClass4"} style={{ width: '50%', flexDirection: 'column', justifyContent: 'center' }}>
                                <span style={{ textAlign: 'left', color: '#888' }}>
                                    Amount ₹   </span>
                                <input
                                    className={"profileInputBill"}
                                    style={{ fontSize: '4vw', marginTop: '1vw' }}
                                    margin="none"
                                    placeholder="₹455"

                                />

                            </Box>
                        </Box>
                        <Box style={{ width: '98%', marginTop: '2VW' }}>
                            <Box flex={1} className={"sampleBorderClass4"} style={{ width: '50%', flexDirection: 'column', justifyContent: 'center', marginRight: '2vw' }}>
                                <span style={{ textAlign: 'left', color: '#888' }}>
                                    Electricity charges@5%   </span>
                                <input
                                    className={"profileInputBill"}
                                    style={{ fontSize: '4vw', marginTop: '1vw' }}
                                    margin="none"
                                    placeholder="₹545"

                                />

                            </Box>

                            <Box flex={1} className={"sampleBorderClass4"} style={{ width: '50%', flexDirection: 'column', justifyContent: 'center' }}>
                                <span style={{ textAlign: 'left', color: '#888' }}>
                                    Surcharges   </span>
                                <input
                                    className={"profileInputBill"}
                                    style={{ fontSize: '4vw', marginTop: '1vw' }}
                                    margin="none"
                                    placeholder="₹1000"

                                />

                            </Box>
                        </Box>
                        <Box style={{ width: '98%', marginTop: '2VW' }}>
                            <Box flex={1} className={"sampleBorderClass4"} style={{ width: '50%', flexDirection: 'column', justifyContent: 'center', marginRight: '2vw' }}>
                                <span style={{ textAlign: 'left', color: '#888' }}>
                                    Meter rent   </span>
                                <input
                                    className={"profileInputBill"}
                                    style={{ fontSize: '4vw', marginTop: '1vw' }}
                                    margin="none"
                                    placeholder="₹250"

                                />

                            </Box>

                            <Box flex={1} className={"sampleBorderClass4"} style={{ width: '50%', flexDirection: 'column', justifyContent: 'center' }}>
                                <span style={{ textAlign: 'left', color: '#888' }}>
                                    Maintenance charges   </span>
                                <input
                                    className={"profileInputBill"}
                                    style={{ fontSize: '4vw', marginTop: '1vw' }}
                                    margin="none"
                                    placeholder="₹2000"

                                />

                            </Box>
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
export default withRouter(GenerateBills);