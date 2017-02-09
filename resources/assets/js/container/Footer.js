var React = require('react');

var Footer = React.createClass({

    render() {
        return (
            <footer className="page-footer white">
                <div className="footer-copyright white" style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col m4">
                                <img src="img/Dental-Access.png" height="10px" />
                            </div>
                            <div className="col m4">

                                <span style={{ fontFamily: 'Oxygen', fontWeight: 300 }}>Copyright 2016 DentalAccessWebinars | All Rights Reserved</span>

                            </div>
                            <div className="col m4">
                                <div className="row">
                                    <div className="col s4 center">
                                        <span style={{ fontFamily: 'Oxygen', fontWeight: 700 }}>TERMS</span>
                                    </div>
                                    <div className="col s4 center">
                                        <span style={{ fontFamily: 'Oxygen', fontWeight: 700 }}>POLICIES</span>
                                    </div>
                                    <div className="col s4 center">
                                        <span style={{ fontFamily: 'Oxygen', fontWeight: 700 }}>CONTACT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
})

module.exports = Footer;