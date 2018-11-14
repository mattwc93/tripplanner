
const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dHdjOTMiLCJhIjoiY2pvZ2Y0bW1qMGVndzNsanRpMncyeTdzZiJ9.YGk4-C1HcApmEK0pO5Shaw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-120.7441, 35.3346], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const makeMarker = (markerType, markerCoords) => {
  let markerUrl = null;
  switch (markerType) {
    case 'hotel':
      markerUrl = 'i.imgur.com/D9574Cu.png'
      break;
    case 'activity':
      markerUrl = 'i.imgur.com/WbMOfMl.png'
      break;
    case 'restaurant':
      markerUrl = 'i.imgur.com/cqR6pUI.png'
      break;
    default:
      console.log('invalid input');
  }
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(http://${markerUrl})`;
  return new mapboxgl.Marker(markerDomEl).setLngLat(markerCoords);
}

makeMarker('activity', [-120.74432, 35.3347]).addTo(map);
