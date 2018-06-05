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
import arrow from '../images/arrow.svg';

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
import downArrow from '../images/down-arrow.svg';
import Checkbox from '@material-ui/core/Checkbox';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ResidentDrawer from './ResidentDrawer';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import input from '@material-ui/core/input';
import checked from '../images/checkedblue.svg';
import unchecked from '../images/unchekedblue.svg';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import List from '@material-ui/core/List';
const theme = createMuiTheme({

    shadows: Array(25).fill('none'),
    outline: 0,
    border: 0
});

const RedBadge = withStyles(() => ({ badge: { backgroundColor: '#F00', color: '#fff', height: 20, width: 20, margin: 5 } }))(Badge);
// const Drawer = withStyles(() => ({ modal: { width: '80%' }, docked: {}, paper: { position: 'relative' } }))(SwipeableDrawer);

//className={"sampleBorderClass"}
const allBills = [{
    billName: 'Electricity bills & Surcharges',
    pendingPayment: '₹265',
    currentCharges: '₹265',
    totalCharges: '₹530'

}, {
    billName: 'Meter Rent',
    pendingPayment: '₹265',
    currentCharges: '₹265',
    totalCharges: '₹530'

}, {
    billName: 'Maintenance bills',
    pendingPayment: '₹265',
    currentCharges: '₹265',
    totalCharges: '₹530'

}, {
    billName: 'Ground rent charges',
    pendingPayment: '₹265',
    currentCharges: '₹265',
    totalCharges: '₹530'

}, {
    billName: 'Water bill',
    pendingPayment: '₹265',
    currentCharges: '₹265',
    totalCharges: '₹530'

}, {
    billName: 'Miscellaneous Charges',
    pendingPayment: '₹265',
    currentCharges: '₹265',
    totalCharges: '₹530'

}, {
    billName: 'Civil works',
    pendingPayment: '₹265',
    currentCharges: '₹265',
    totalCharges: '₹530'

}, {
    billName: 'Building maintenance charges',
    pendingPayment: '₹265',
    currentCharges: '₹265',
    totalCharges: '₹530'

}, {
    billName: 'Parking charges',
    pendingPayment: '₹265',
    currentCharges: '₹265',
    totalCharges: '₹530'

}
    , {
    billName: 'Development charges',
    pendingPayment: '₹265',
    currentCharges: '₹265',
    totalCharges: '₹530'

},
{
    billName: 'Interest on payment past due date',
    pendingPayment: '₹265',
    currentCharges: '₹265',
    totalCharges: '₹530'

}];

class PayBills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
            open: false,
            anchorEl: null,
            dialogOpen: false,
            expanded: null,

        };
    }
    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
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
                {/* <Box flex={10} style={{position:'fixed',width:'100%',zIndex:100, backgroundColor: '#197fc7', alignItems: 'center', justifyContent: 'center' }} className={"dashboard-upper"}> */}
                <Box style={{ width: '100%', zIndex: 100, backgroundColor: 'rgb(4,178,216)', alignItems: 'center', justifyContent: 'space-between', position: 'fixed', height: '10vh' }} >
                    <IconButton aria-label="Menu" >
                        <img src={arrow} onClick={this.goBack.bind(this)} style={{ width: '5vw', height: '5vw' }} />
                    </IconButton>
                    <span style={{ color: 'white', fontSize: '5vw' }}>PAY BILLS</span>
                    <div >
                        <IconButton aria-label="Menu">
                        </IconButton>
                    </div>
                    {/* </Box> */}
                </Box>
                <Box className={"sampleBorderClass3"} style={{ background: '#fff', padding: '3vw', position: 'fixed', height: '5vh', zIndex: 100, width: '96%', marginTop: '10vh' }}>
                    <Box flex={7} className={"sampleBorderClass4"} style={{ flexDirection: 'column' }}>
                        <span style={{ color: '#666', fontSize: '4vw', textAlign: 'left' }}>Selected bills total payment</span>
                        <span style={{ color: 'rgb(216,36,36)', fontSize: '4vw', textAlign: 'left', fontWeight: 700, marginTop: '1vw' }}>₹15000.00</span>

                    </Box>
                    <Box flex={3} className={"sampleBorderClass4"}>
                        <button style={{ borderRadius: '5vw', background: 'rgb(216,36,36)', color: '#fff', paddingLeft: '5vw', paddingRight: '5vw', fontSize: '4vw', border: '2px solid rgb(255,107,27)' }}> Pay Bills</button>
                    </Box>
                </Box>
                <Box className={"sampleBorderClass4"} style={{ marginTop: '19vh' }}>
                    <MuiThemeProvider theme={theme}>

                        <List

                            style={{ marginLeft: '3vw', marginRight: '3vw', width: '100%' }}
                        >
                            {
                                allBills.map((billObj, index) =>

                                    <ListItem style={{ padding: 0, marginBottom: 10, background: "rgb(246,245,251)", border: '1px solid #aaa' }} key={index}>
                                        <Checkbox
                                            style={{ margin: 0, alignSelf: 'flex-start' }}
                                            icon={<img src={unchecked} style={{ height: 15, width: 15 }} />}
                                            checkedIcon={<img src={checked} style={{ height: 15, width: 15 }} />}
                                            value="Society"
                                        />

                                        <ExpansionPanel expanded={this.state.expanded === index} onChange={this.handleChange(index)} className={"expansionPanel"} style={{ background: "rgb(246,245,251)", width: '100%', padding: 0, borderTop: '0px solid', zIndex: 50 }}>

                                            <ExpansionPanelSummary className={"sampleBorderClass3"} style={{ padding: 0, borderTop: '0px solid' }} expandIcon={<img src={downArrow} style={{ width: 15, height: 15 }} />}>

                                                <Typography style={{ fontWeight: 500, fontSize: '4vw', color: 'rgb(52,54,58)' }}>{billObj.billName}</Typography>

                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className={"sampleBorderClass4"} style={{ flexDirection: 'column', paddingLeft: '10vw', paddingRight: '10vw', paddingBottom: '5vw', paddingTop: 0 }}>
                                                <Typography className={"sampleBorderClass3"} style={{ justifyContent: 'space-between', color: 'rgb(84,88,94)' }}>
                                                    <Box>
                                                        <span className={"sampleBorderClass4"} style={{ flex: 8 }}>Pending payment </span >

                                                        <span style={{ textAlign: 'right', alignSelf: 'flex-end', flex: 2 }} className={"sampleBorderClass4"}>{billObj.pendingPayment}</span>
                                                    </Box>
                                                </Typography>
                                                <Typography className={"sampleBorderClass3"} style={{ justifyContent: 'space-between', color: 'rgb(84,88,94)' }}>
                                                    <Box>
                                                        <span className={"sampleBorderClass4"} style={{ flex: 8 }}>5th feb to 5th march 2018 </span >

                                                        <span style={{ textAlign: 'right', alignSelf: 'flex-end', flex: 2 }} className={"sampleBorderClass4"}>{billObj.currentCharges}</span>
                                                    </Box>
                                                </Typography>
                                                <Typography className={"sampleBorderClass3"} style={{ justifyContent: 'space-between', color: 'rgb(216,36,36)' }}>
                                                    <Box>
                                                        <span className={"sampleBorderClass4"} style={{ flex: 8 }}> Total</span >

                                                        <span style={{ textAlign: 'right', alignSelf: 'flex-end', flex: 2 }} className={"sampleBorderClass4"}>{billObj.totalCharges}</span>
                                                    </Box>
                                                </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </ListItem>
                                )
                            }
                        </List>
                    </MuiThemeProvider>

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
export default withRouter(PayBills);