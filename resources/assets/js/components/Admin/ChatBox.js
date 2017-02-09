import React, { Component } from 'react';
import LiveChat from './LiveChat';
import Messages from './Messages';
import baseUrl from '../../config';
import axios from 'axios';
import { Link } from 'react-router';

export default class ChatBox extends Component {

	state = {
		listLiveChat: [],
		listOfMessages: []
	}

	getApiLiveChat = () => {
		// let url = baseUrl.apiUrl + 'course/1/messages';

		// axios.get(url).then((res) => {
		// 	this.setState({
		// 		listLiveChat : res.data
		// 	});
		// }).catch((error) => {
		// 	console.log(error);
		// });

		let w;

		if (typeof (Worker) !== "undefined") {
			if (typeof (w) == "undefined") {
				w = new Worker("../worker.js"); // public/worker.js
			}
			w.onmessage = (event) => {
				this.setState({
					listLiveChat: JSON.parse(event.data)
				});
			}
		} else {
			console.log('no data');
		}
	}

	getApiMessages = () => {
		let url = baseUrl.apiUrl + 'course/1/messages?flag=1';

		axios.get(url).then((res) => {
			this.setState({
				listOfMessages: res.data
			});
		}).catch((error) => {
			console.log(error);
		})
	}

	handleSelectMessage = (id) => {
		let data = this.state.listLiveChat;
		let index = data.findIndex((item) => item.id == id);
		let messages = this.state.listOfMessages;

		messages.unshift(data[index]); // set to message
		data.splice(index, 1); // remove from live chat

		this.postApiMessages(id, data, messages);
	}

	postApiMessages = (id, data, messages) => {
		let url = baseUrl.apiUrl + 'message/' + id + '/select';

		axios.post(url, {}).then((res) => {
			this.setState({
				listLiveChat: data,
				listOfMessages: messages
			});
		}).catch((error) => {
			console.log(error);
		})

	}

	componentDidMount() {
		this.getApiLiveChat();
		this.getApiMessages();
	}

	render() {

		return (
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col s6">
							<h4>Live Chat</h4>
							<div className="chatBox">
								<ul className="collection">
									{this.state.listLiveChat.map((item, i) => {
										return <LiveChat data={item} key={i} index={i} onSelectMessage={this.handleSelectMessage} />
									})}
								</ul>
							</div>
						</div>
						<div className="col s6">
							<h4>Messages</h4>
							<div className="chatBox">
								<ul className="collection">
									{this.state.listOfMessages.map((item, i) => {
										return <Messages data={item} key={i} index={i} />
									})}
								</ul>
							</div>
							<Link to="/admin/printView" className="btn waves-effect waves-light indigo darken-3 right">For Posting</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}