import React, { Component } from 'react';
import LoginForm from '../../commons/Login';
import { browserHistory } from 'react-router';

export default class Login extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		let formData = $(e.target).serialize();
		console.log(formData);
		browserHistory.push('/admin/dashboard');
	}

	render() {
		return (
			<div className="section">
				<div className="row">
					<div className="container valign-wrapper heightView">
						<div className="col l8 offset-l2">
							<h4 className="center-align">ADMIN</h4>

							<LoginForm handleSubmit={this.handleSubmit} />

						</div>
					</div>
				</div>
			</div>
		)
	}
}