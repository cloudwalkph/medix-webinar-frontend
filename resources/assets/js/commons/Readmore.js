import React, { Component } from 'react';

export default class Readmore extends Component {

	state = {
		style: {
			button: {
				display: 'block'
			}
		}
	}

	handleClickButton = (e) => {

		let $el, $ps, $up, $p, totalHeight;

		totalHeight = 0

		$el = $(e.target);
		$p = $el.parent().find('.read-more');
		$up = $p.parent();
		$ps = $up.find("p:not('.read-more')");

		$ps.each(function () {
			totalHeight += $(this).outerHeight(true);
		});

		$up
			.css({
				// Set height to prevent instant jumpdown when max height is removed
				"height": $up.height(),
				"max-height": 9999
			})
			.animate({
				"height": totalHeight
			});

		// fade out read-more
		$p.fadeOut();
		$el.fadeOut();

		// prevent jump-down
		return false;
	}

	render() {
		return (
			<div>
				<div className="sidebar-box">
					<p>
						Dr.  Kimberly Ray R. Fajardo is an alumnus of the University of the East College of Dentistry way
						back in 2009. He became  a professor at the same university at the department of Prosthodontics,
						Practice Management and Undergraduate Research. In 2013, he became a visiting scholar at the
						Seoul National University - Bounding Hospital.  Among his many achievements, Dr Kim as he is
						fondly called co-authored and published a study entitled: "The Antimicrobial Effect of Different
						Xylitol Concentrations on Streptococcus mutant and Lactobacillus acidophilus count" for the
						Journal of Restorative Dentistry. Today, he is an active member and officer of the Philippine
						Prosthodontics Society, member of the Cavite Dental Chapter and  International Association of
						Orthodontics - Philippine Section.
					</p>
					<p className="read-more">

					</p>
				</div>
				<a href="javascript:void(0)" className="btn-flat waves-effect waves-teal center-align" onClick={this.handleClickButton} style={this.state.style.button}>Read More</a>
			</div>

		)
	}

}