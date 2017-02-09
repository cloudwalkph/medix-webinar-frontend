import React, { Component } from 'react';
import moment from 'moment';

export default class LiveChat extends Component {

	state = {

	}

	handleSubmitMessage = (e) => {
		this.props.onSelectMessage(this.props.data.id);
	}

	componentDidMount() {
		console.log(this.props)
	}

	render() {
		return (
			<li className="collection-item avatar">

				<span className="title">{this.props.data.user.first_name + ' ' + this.props.data.user.last_name}</span>
				<p>{this.props.data.message}</p>
				<div className="right-align"><sub>{moment(this.props.data.created_at).format('h:mm:ss')}</sub></div>
				<a href="#!" className="secondary-content" onClick={this.handleSubmitMessage} title="Send"><i className="material-icons">send</i></a>
			</li>
		)
	}
}