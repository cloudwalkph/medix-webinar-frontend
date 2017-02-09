import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const {Grid, Row, Col} = require('react-flexbox-grid');

const {AppBar} = require('material-ui');

import Navbar from '../commons/Navbar';
import Footer from './Footer';

import Homepage from './Homepage';
import Inside from '../container/Courses';

class Main extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <Navbar storeData={this.props} />

                    <Homepage />

                    <Footer />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Main;