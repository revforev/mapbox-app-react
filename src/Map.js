import React, {Component} from 'react';
import mapbox from 'mapbox-gl';
import './Map.css';

class Map extends Component {
  componentDidMount() {
    mapbox.accessToken =
      'pk.eyJ1IjoicmV2Zm9yZXYiLCJhIjoiY2x0OG0zamxjMG8ybTJqcjRyanlwdHo0NSJ9.Me4S5k_QR_oDNLS8ISOUcg';
    let map = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
    });
  }

  render() {
    return <div id="map">map will go here!!</div>;
  }
}

export default Map;
