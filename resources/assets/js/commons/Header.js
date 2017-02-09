import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import baseUrl from '../config';
import SignUp from './SignUp';
import axios from 'axios';

export default class Header extends Component {

    state = {
        items: ['hello', 'world', 'click', 'me'],
        disableButton: false,
        openModal: false
    }

    handleClose = () => {
        this.setState({
            openModal: false
        });
    }

    handleSubmitForm = (e) => {

        let url = baseUrl.apiUrl + 'user';
        let formData = $('#signUpForm').serialize();

        this.setState({
            disableButton: true
        });

        if (this.formValidation() == 0) {
            this.setState({
                disableButton: false
            });
            return;
        }

        axios.post(url, formData).then((res) => {
            this.setState({
                disableButton: false,
                openModal: false
            });
        }).catch((error) => {
            this.setState({
                disableButton: false,
                openModal: false
            });
        });
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
            openModal: true
        })
    }

    componentDidMount() {

    }

    render() {
        let actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                disabled={this.state.disableButton}
                onTouchTap={this.handleSubmitForm}
            />
        ];

        let user = JSON.parse(sessionStorage.getItem('access'));

        return (
            <div className="section valign-wrapper" style={{ height: '90vh' }}>
                <div className="container">
                    <br />
                    <h4 className="header center">ONLINE COURSES FOR <span style={{ fontFamily: 'Oxygen', fontWeight: 'bold', color: '#1b584c' }}>CONTINUING EDUCATION</span></h4>

                    <div className="row center">
                        <div className="col s8 offset-s2">
                            <h6 style={{ fontFamily: 'Source Sans Pro', fontSize: '16px', lineHeight: '1.6rem' }}>
                                Dental Access Webinar is an upstart technology platform that aims to deliver continuing dental education for all dentists that is easily accessible through the world-wide web. It provides an
                                alternative venue where Dentists would interact with each other and share basic and advanced knowledge in their field of specializations
							</h6>
                        </div>
                    </div>
                    {user ?
                        null

                        :

                        <div className="row center">
                            <a href="#" id="download-button" className="btn-large waves-effect waves-light indigo darken-4" onClick={this.handleSignUpButton}>REGISTER HERE</a>
                        </div>
                    }

                </div>


                <Dialog
                    title="Sign up"
                    actions={actions}
                    modal={false}
                    open={this.state.openModal}
                    autoScrollBodyContent={true}
                >
                    <SignUp />

                </Dialog>

            </div>
        )
    }
}
