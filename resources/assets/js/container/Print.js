import React, { Component } from 'react';
import baseUrl from '../config';
import axios from 'axios';
import Messages from '../components/Admin/Messages';

export default class Print extends Component {

	state = {
		listOfMessages: []
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

	componentDidMount() {
		this.getApiMessages();
	}

	render() {
		return (
			<div className="section">
				<div className="container" style={{ backgroundColor: '#fff' }}>
					<ul className="collection">
						{this.state.listOfMessages.map((item, i) => {
							// return <Messages data={item} key={i} index={i}/>
							return <li key={i}>
								<span><b>{item.user.first_name + ' ' + item.user.last_name}</b> : </span>
								<span>{item.message}</span>
								<br />
							</li>
						})}
					</ul>
				</div>
			</div>
		)
	}
}