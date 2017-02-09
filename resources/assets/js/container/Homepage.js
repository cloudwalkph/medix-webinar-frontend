var React = require('react');

import Header from '../commons/Header';
import LatestUploads from './LatestUploads';
import WeeklyPics from './WeeklyPics';
import TopSpecialization from './TopSpecialization';
import About from './About';

var Homepage = React.createClass({

    render() {

        return (
            <div>
                <Header />

                {/*<div className="divider"></div>*/}

                <LatestUploads />
                {/*<WeeklyPics />
                <TopSpecialization />
*/}                <About />
            </div>
        )
    }
})

module.exports = Homepage;