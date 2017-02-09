import React from 'react';

const tilesData = [
    {
        img: 'img/img-root-canal.jpg'
    },
    {
        img: 'img/03.jpg'
    },
    {
        img: 'img/dentalimplants.jpg'
    },
    {
        img: 'img/Pediatric-Dentistry-1.jpg'
    },
    {
        img: 'img/IMG_1806.jpg'
    },
    {
        img: 'img/bigstock-x-ray-photo-of-teeth-Dental-e-64462231.jpg'
    },
    {
        img: 'img/endodontics.jpg'
    },
    {
        img: 'img/maxresdefault.jpg'
    }
];

var TopSpecialization = React.createClass({

    render() {
        return (
            <div className="section scrollspy" id="topSpecializations">

                <h4 className="center" style={{ fontFamily: 'Oxygen' }}>TOP SPECIALIZATIONS</h4>

                <div className="row container">
                    <div className="col s12">

                        <ul className="tabs tabs-fixed-width">
                            <li className="tab"><a className="active" href="#test1">All</a></li>
                            <li className="tab"><a href="#test2">Endodontics</a></li>
                            <li className="tab"><a href="#test3">Orthodontics</a></li>
                            <li className="tab"><a href="#test4">Pediatrics</a></li>
                            <li className="tab"><a href="#test5">Prothodontics</a></li>

                        </ul>

                    </div>

                    <div id="test1" className="col s12">
                        <div className="row">

                            {tilesData.map((tile) => (
                                <div key={tile.img} className="col s12 m3">
                                    <div className="card small">
                                        <div className="card-image">
                                            <img src={tile.img} />
                                            <span className="card-title">Card Title</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="test2" className="col s12">Test 2</div>
                    <div id="test3" className="col s12">Test 3</div>
                    <div id="test4" className="col s12">Test 4</div>
                    <div id="test5" className="col s12">Test 4</div>
                </div>

                <div className="row center">
                    <a style={{ fontFamily: 'Oxygen' }} href="#" id="download-button" className="btn-large waves-effect waves-light indigo darken-3">VIEW ALL COURSES</a>
                </div>
            </div>
        )
    }
})

module.exports = TopSpecialization;