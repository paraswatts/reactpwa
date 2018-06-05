import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/Login.css';
import Box from 'react-layout-components';


import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';


import List from '@material-ui/core/List';

//const RedBadge = withStyles(() => ({ badge: { backgroundColor: '#F00', color: '#fff', height: 20, width: 20, margin: 5 } }))(Badge);
// const Drawer = withStyles(() => ({ modal: { width: '80%' }, docked: {}, paper: { position: 'relative' } }))(SwipeableDrawer);
//className={"sampleBorderClass"}
class spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
            open: false
        };
    }
   
   
    componentWillMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
    }
    
   
    render() {
        return (
            <Box style={{width:'100vw',height:'100vh',alignItems:'center',justifyContent:'center',zIndex:100, position:'absolute',  backgroundColor:'rgba(255,255,255,0.8)'
        }}>
            <CircularProgress thickness={7} />
            </Box>
        );
    }
}

export default spinner;