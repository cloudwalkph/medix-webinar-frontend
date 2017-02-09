import React from 'react';
import { Link } from 'react-router';
import baseUrl from '../config';
import axios from 'axios';

var LatestUploads = React.createClass({

    componentDidMount() {
        $('.slider').slider();
    },

    render() {
        return (
            <div className="section scrollspy" id="LatestUploads">
                <div className="container" >
                    <div className="row">
                        <div className="col s12">
                            <div className="slider" id="latestSliders">
                                <ul className="slides" style={{ backgroundColor: '#FFF', height: '90vh' }}>
                                    <li>
                                        <div className="col l6">
                                            <div className="row">
                                                <h3 style={{ fontFamily: "Source Sans Pro" }}>LATEST UPLOADS</h3>

                                            </div>
                                            <hr />
                                            <div className="row">
                                                <h5>
                                                    <strong>TEMPORIZATION:</strong> THE ROAD TO FINAL RESTORATION
                                                </h5>
                                                <strong style={{ fontFamily: 'Source Sans Pro' }}>Lecture by Dr. Kim Fajardo</strong>
                                                <p className="webinarDescription">
                                                    The current trend of the dental profession is geared towards esthetics and beauty.
                                                </p>
                                                <Link style={{ fontFamily: 'Oxygen', fontWeight: 'bold' }} to="/courses/1" id="download-button" className="btn waves-effect waves-light indigo darken-3">VIEW COURSE</Link>
                                            </div>
                                        </div>
                                        <div className="col l6">
                                            <img className="responsive-img" src="/img/Courses/pajards.png" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = LatestUploads;

