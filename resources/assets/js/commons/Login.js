import React, { Component } from 'react';

export default class Login extends Component {


	render() {
		return (
			<div className="section">
				<div className="row">
					<form className="col s10 offset-l1" id="loginForm" onSubmit={this.props.handleSubmit}>
						<div className="row">
							<div className="input-field col s12">
								<input id="userName" type="email" className="validate" name="username" required />
								<label htmlFor="first_name" data-error="Invalid Email">Username</label>
							</div>
							<div className="input-field col s12">
								<input id="password" type="password" className="validate" name="password" required />
								<label htmlFor="first_name" data-error="This field is required">Password</label>
							</div>
						</div>
						<input type="submit" style={{ display: 'none' }} />
					</form>
				</div>
			</div>
		)
	}
}