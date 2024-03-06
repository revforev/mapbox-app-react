import React, {Component} from 'react';
import mapbox from 'mapbox-gl';
import './Map.css';

class Map extends Component {
  componentDidMount() {
    mapbox.accessToken =
      'pk.eyJ1IjoicmV2Zm9yZXYiLCJhIjoiY2x0OG0zamxjMG8ybTJqcjRyanlwdHo0NSJ9.Me4S5k_QR_oDNLS8ISOUcg';
    let map = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-74.006, 40.7128],
      zoom: 12,
    });
    const navigationControl = new mapbox.NavigationControl();

    map.addControl(navigationControl);
  }

  render() {
    return <div id="map">map will go here!!</div>;
  }
}

export default Map;
