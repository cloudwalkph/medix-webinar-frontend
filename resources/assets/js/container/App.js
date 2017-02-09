import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from '../commons/Navbar';
import Footer from './Footer';

const {Grid, Row, Col} = require('react-flexbox-grid');

const {AppBar} = require('material-ui');

export default class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <Navbar storeData={this.props} />
                    {this.props.children}
                    <Footer />
                </div>
            </MuiThemeProvider>
        )
    }
}