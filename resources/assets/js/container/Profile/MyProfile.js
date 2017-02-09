import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import baseUrl from '../../config';
import { Link } from 'react-router';

export default class MyProfile extends Component {

	state = {

	}

	render() {
		return (
			<div className="section heightView">
				<div className="row">
					<div className="col l3 verticalLine">
						<div className="container">
							<ul className="section table-of-contents contentListLink">
								<li><a href="#!" className="active">MY COURSES</a></li>
								<li><a href="#!">MY ACCOUNT</a></li>
							</ul>
						</div>
					</div>
					<div className="col l9">
						<div className="col s12 l4">
							<div className="card">
								<div className="card-image">
									<img src="/img/Courses/pajards.png" />
									<span className="card-medix-title">26 Dec</span>
								</div>
								<div className="card-content">
									<p>THE ROAD TO FINAL RESTORATION</p>
								</div>
								<div className="card-action">
									<div className="row" style={{ margin: 0 }}>
										<div className="col l8 left-align">
											<Link to="/courses/1" className="brand-logo" style={{ margin: 0 }}>Dr. Kim Fajardo</Link>
										</div>
										<div className="col l4 right-align">
											<Link to="/courses/1" className="brand-logo" style={{ margin: 0 }}>VISIT</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}