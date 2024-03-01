import React from 'react';
import mapbox from 'mapbox-gl';

function Map() {
  mapboxgl.accessToken = '';
  let map = new mapbox.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
  });

  return <div id="map">map will go here!!</div>;
}

export default Map;
