import React, { Component } from 'react';

export default class AboutUs extends Component {

	componentDidMount() {
		$('.parallax').parallax();
		$('body').scrollTop(0);
	}

	render() {

		return (
			<div className="row">
				<div className="parallax-container">
					<div style={{ color: 'rgba(0, 0, 0, 0.87)' }} className="container">
						<h5>ABOUT DENTAL ACCESS WEBINARS</h5>
						<div className="section">
							<p style={{ fontFamily: 'Source Sans Pro' }}>
								Dental Access Webinar is committed to provide the highest quality of education in the
								Dental profession with the noble intention of helping address human problems through
								introduction of the latest technologies, keeping in par with global standards,
								and helping people live better lives.
							</p>
						</div>
						<div className="section">
							<h5>Philosophy</h5>
						</div>
						<div className="section">
							<p style={{ fontFamily: 'Source Sans Pro' }}>
								“Education is nurtured through a conscious commitment of continuous learning throughout life.”
							</p>
						</div>
						<div className="section">
							<h5>Vision</h5>
						</div>
						<div className="section">
							<p style={{ fontFamily: 'Source Sans Pro' }}>
								To become the leading web-based continuing professional education provider for
								Dentistry as well as in the delivery of basic dental health education for
								dental patients in the Philippines and the rest of Asia-Pacific Region in the next five years.
							</p>
						</div>
						<div className="section">
							<h5>Mission</h5>
						</div>
						<div className="section">
							<p style={{ fontFamily: 'Source Sans Pro' }}>
								To provide easy access to continuing professional education to
								Dentists who are having difficulty in personally
								attending clinical conferences, seminars and conventions and at the
								same time assist dental patients in reaching information as regards dental health situations.
							</p>
						</div>
						<div className="section">
							<div className="row">
								<div className="col l3">
									<img src="/img/id4.jpg" style={{ width: '100%' }} />
								</div>
								<div className="col l9">
									<div className="section">
										<strong style={{ fontWeight: 'bolder', fontSize: '1.6rem' }}>Project Manager:</strong><span style={{ fontSize: '1.6rem' }}> Arvin B. Laguna, DDM, PhD</span>
										<p>
											Dr. Arvin B. Laguna is a graduate of Doctor
											of Philosophy in Educational Management and has been
											in the teaching profession for 18 years, serving both
											as faculty and clinical instructor at the Adventist University
											of the Philippines and the University of Perpetual Help System DALTA.
											He is a graduate of the University of the Philippines College of Dentistry
											and has taught in various dental courses as well as served as a Research
											Coordinator and Technical Panel in the university.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="parallax">
						<img src="img/Rectangle-532.jpg" width="100%" />
					</div>
				</div>
			</div>
		)
	}
}