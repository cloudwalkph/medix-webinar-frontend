import React, { Component } from 'react';
import { Link } from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SignUp from './SignUp';
import Login from './Login';
import baseUrl from '../config';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Snackbar from 'material-ui/Snackbar';

export default class Navbar extends Component {
    state = {
        active: '',
        open: false,
        openLogin: false,
        openSuccess: false,
        disableButton: false,
        loaders: false,
        openSnackbarMessage: false,
        style: {
            logo: { width: '100%' },
            smallModal: { width: '50%' }
        }
    }

    handleLinkClick = (e) => {
        let tag = e.target.getAttribute('href');
        let refName = tag.split('#')[1];

        this.setState({
            active: refName
        });
    }

    handleClose = () => {
        this.setState({
            open: false,
            openLogin: false
        });
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        let url = baseUrl.apiUrl + 'user';
        let formData = $('#signUpForm').serialize();

        this.setState({
            disableButton: true,
            loaders: true
        });

        if (this.formValidation() == 0) {
            this.setState({
                disableButton: false,
                loaders: false
            });
            return;
        }

        axios.post(url, formData).then((res) => {
            this.setState({
                disableButton: false,
                open: false,
                openSuccess: true,
                loaders: false
            });
        }).catch((error) => {
            alert('email already exist');
            $('#signUpForm')[0].email.focus();
            this.setState({
                disableButton: false,
                loaders: false
            });
        })
    }

    handleLoginForm = (e) => {
        let url = baseUrl.apiUrl + 'login';
        let formData = $('#loginForm');

        this.setState({
            disableButton: true,
            loaders: true
        });
        if (this.loginValidation(formData) == 1) {
            let data = formData.serialize();
            axios.post(url, data).then((res) => {
                this.setState({
                    disableButton: false,
                    openLogin: false,
                    loaders: false
                }, () => {
                    this.getSession(res.data);
                });
            }).catch((error) => {
                console.log(error);
                formData[0].username.focus();
                this.setState({
                    disableButton: false,
                    loaders: false,
                    openSnackbarMessage: true
                });
            })
        }
        this.setState({
            disableButton: false
        });
    }

    getSession = (data) => {
        sessionStorage.setItem('access', JSON.stringify(data));
        browserHistory.push('/myprofile');
    }

    loginValidation = (form) => {
        if (!form[0].username.value) {
            form[0].username.focus();
            return 0;
        }
        if (!form[0].password.value) {
            form[0].password.focus();
            return 0;
        }
        return 1;
    }

    formValidation = () => {

        if (!$('#signUpForm')[0].email.value) {
            $('#signUpForm')[0].email.focus();
            return 0;
        }

        if (!$('#signUpForm')[0].password.value) {
            $('#signUpForm')[0].password.focus();
            return 0;
        }

        if (!$('#signUpForm')[0].first_name.value) {
            $('#signUpForm')[0].first_name.focus();
            return 0;
        }

        if (!$('#signUpForm')[0].last_name.value) {
            $('#signUpForm')[0].last_name.focus();
            return 0;
        }

        if (!$('#signUpForm')[0].gender.value) {
            $('#signUpForm')[0].gender.focus();
            return 0;
        }

        return 1;
    }

    handleSignUpButton = (e) => {
        this.setState({
            open: true
        })
    }

    handleLogin = (e) => {
        this.setState({
            openLogin: true
        })
    }

    handleLogout = (e) => {
        sessionStorage.removeItem('access');
        // window.location = self.location;
        browserHistory.push('/');
    }

    handleRequestCloseSnackbar = () => {
        this.setState({
            openSnackbarMessage: false
        })
    }

    componentDidMount() {
        $('.button-collapse').sideNav({
            closeOnClick: true
        });
        $('.scrollspy').scrollSpy({
            offset: 0
        });
        $('.modal').modal();
    }

    render() {

        if (this.state.open) {
            $('#signUpModal').modal('open');
        } else {
            $('#signUpModal').modal('close');
        }

        let pathName = this.props.storeData.location.pathname;
        let user = JSON.parse(sessionStorage.getItem('access'));

        let liLinks = <ul className="right hide-on-med-and-down">
            {/*<li className={this.state.active == 'topSpecializations' ? 'active' : ''}><a href="#topSpecializations" onClick={this.handleLinkClick}>TOP COURSES</a></li>*/}
            <li className={this.state.active == 'LatestUploads' ? 'active' : ''}><a href="#LatestUploads" onClick={this.handleLinkClick}>NEW COURSES</a></li>
            <li className={this.state.active == 'aboutUs' ? 'active' : ''}><a href="#aboutUs" onClick={this.handleLinkClick}>ABOUT</a></li>
            <li><a href="#" onClick={this.handleLogin}>LOG IN</a></li>
            <li><a href="#" className="btn waves-effect waves-light indigo darken-3" onClick={this.handleSignUpButton}>SIGN UP</a></li>

        </ul>

        if (user) {
            liLinks = <ul className="right hide-on-med-and-down">
                <li><Link to="/myprofile" >My Profile</Link></li>
                <li><a href="#" className="btn waves-effect waves-light indigo darken-3" onClick={this.handleLogout}>LOG OUT</a></li>
            </ul>
        } else if (pathName != '/') {
            liLinks = <ul className="right hide-on-med-and-down">
                <li><a href="#" onClick={this.handleLogin}>LOG IN</a></li>
                <li><a href="#" className="btn waves-effect waves-light indigo darken-3" onClick={this.handleSignUpButton}>SIGN UP</a></li>

            </ul>;
        }

        let actions = [
            <FlatButton
                key="1"
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                key="2"
                label="Submit"
                primary={true}
                keyboardFocused={true}
                disabled={this.state.disableButton}
                onTouchTap={this.handleSubmitForm}
            />
        ];
        let loginActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
                disabled={this.state.disableButton}
            />,
            <FlatButton
                label="Login"
                primary={true}
                keyboardFocused={true}
                disabled={this.state.disableButton}
                onTouchTap={this.handleLoginForm}
            />
        ];

        let successAction = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={() => {
                    this.setState({
                        openSuccess: false
                    });
                }}
            />
        ];

        return (
            <header>
                <div className="navbar-fixed">
                    <nav className="white" role="navigation">
                        <div className="container">
                            <div className="nav-wrapper" style={{ fontFamily: 'Oxygen', fontWeight: 'bold' }}>
                                <Link to="/" id="logo-container" className="brand-logo">
                                    <img className="responsive-img" src="img/logo.png" />
                                </Link>

                                {liLinks}

                                <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons black-text">menu</i></a>
                            </div>
                        </div>
                    </nav>
                </div>
                <ul id="nav-mobile" className="side-nav">
                    {/*<li><a href="#">TOP COURSES</a></li>*/}
                    <li><a href="#LatestUploads">NEW COURSES</a></li>
                    <li><a href="#aboutUs">ABOUT</a></li>
                    <li><a href="#" onClick={this.handleLogin}>LOG IN</a></li>
                    <li><a href="#" className="btn waves-effect waves-light indigo darken-3" onClick={this.handleSignUpButton}>SIGN UP</a></li>
                </ul>
                {/*<Dialog
                    title="Sign up"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    autoScrollBodyContent={true}
                    autoDetectWindowHeight={false}
                    repositionOnUpdate={true}
                >
                    <SignUp/>

                </Dialog>*/}

                <div id="signUpModal" className="modal">
                    <div className="modal-content">
                        <h4>Sign up</h4>
                        <SignUp />
                    </div>

                    {this.state.loaders ?
                        <div className="row">
                            <div className="progress">
                                <div className="indeterminate"></div>
                            </div>
                        </div>

                        :

                        null
                    }

                    <div className="modal-footer right-align">
                        {actions}
                    </div>
                </div>

                <Dialog
                    title="Login"
                    actions={loginActions}
                    modal={false}
                    open={this.state.openLogin}
                    autoScrollBodyContent={true}
                    autoDetectWindowHeight={false}
                    repositionOnUpdate={true}
                    onRequestClose={() => {
                        this.setState({
                            openLogin: false
                        })
                    }}

                >
                    {this.state.loaders ?
                        <div className="row">
                            <div className="progress">
                                <div className="indeterminate"></div>
                            </div>
                        </div>

                        :

                        null
                    }

                    <Login handleSubmit={(e) => { e.preventDefault() }} />

                </Dialog>

                <Dialog
                    title="Success"
                    actions={successAction}
                    modal={false}
                    open={this.state.openSuccess}
                    onRequestClose={() => {
                        this.setState({
                            openSuccess: false
                        })
                    }}
                >
                    <div className="section">
                        <div className="container">
                            <p>Thank you for signing up! Please check your email for your account's confirmation and for the webinar's guidelines!</p>
                        </div>
                    </div>
                </Dialog>

                <Snackbar
                    open={this.state.openSnackbarMessage}
                    message="Invalid email and password"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestCloseSnackbar}
                />

            </header>
        )
    }
}