import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    height: 400
  },
};

const tilesData = [
  {
    img: 'img/pexels-photo-87346.jpg',
    title: 'Accelerated Aligner Therapy',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'img/dentist-pain-borowac-cure-52527.jpg',
    title: 'Tooth Structure: Nature&rsquo;s Best Restorative Material',
    author: 'pashminu',
  },
  {
    img: 'img/woman-child-doctor-hospital.jpg',
    title: 'Oral Health and Dental Management for the Pregnant Patient',
    author: 'Danson67',
  },
  {
    img: 'img/pexels-photo.jpg',
    title: 'Dry Mouth Discomfort Treatment',
    author: 'fancycrave1',
  },
  {
    img: 'img/pexels-photo-127873.jpg',
    title: 'Anterior Provisionalization Made Easy',
    author: 'Hans',
  }
];

var WeeklyPics = React.createClass({

  render() {
    return (
      <div className="container" style={{ marginBottom: '16%' }}>
        <div className="section center-align">
          <h4 style={{ fontFamily: 'Oxygen' }}>DEAN'S WEEKLY PICS</h4>
          <p style={{ fontFamily: 'Source Sans Pro' }}>Many times they have afflicted me from my youth up. Let Israel now say, many times they have afflicted my from my youth up, yet they have not prevailed against me. The plowers plowed on my back. They made their furrows long. Yahweh is righteous.</p>
        </div>

        <GridList
          cols={4}
          cellHeight={200}
          padding={1}
          style={styles.gridList} >

          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={tile.featured ? 4 : 1}
              rows={tile.featured ? 2 : 1}>

              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
});

module.exports = WeeklyPics;

