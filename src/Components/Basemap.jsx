import React, {useEffect, useState, useRef} from "react";
import Map from "ol/Map";
import View from "ol/View";
import LayerTile from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

function Basemap(props) {
  const [ map, setMap ] = useState()
  const mapElement = useRef()

  const view = new View({ 
    center: [0,0],
    zoom: 4,  
    minZoom: 3,
    projection: 'EPSG:3857'
  });

  const baseLayer = new LayerTile({
      source: new XYZ ({ 
        url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}',
      }),
    });

    const nightLayer = new VectorLayer({
      source: new VectorSource()
    })

  useEffect(() => {
    const initialMap = new Map({
      target: mapElement.current,
      layers: [baseLayer, nightLayer],
      view: view 
    })
    setMap(initialMap)
  },[])
  
  return (
    <div ref={mapElement} className="map-container"></div>
  );
}

export default Basemap