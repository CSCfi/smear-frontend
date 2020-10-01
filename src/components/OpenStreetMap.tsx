import React, { useEffect } from 'react'
import 'ol/ol.css';
import { Map, View } from 'ol';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { Icon, Style, Text } from 'ol/style';

import { STATIONS } from '../constants'

const stationFeatures = () => {
  return STATIONS.map(station => {
    const { name, text, coordinates, iconSrc } = station
    const feature = new Feature({
      geometry: new Point(fromLonLat(coordinates)),
      name
    })
    feature.setStyle(new Style({
      text: new Text({
        padding: [4, 4, 4, 4],
        text,
        textAlign: 'left'
      }),
      image: new Icon({
        imgSize: [20, 24],
        scale: .5,
        src: iconSrc
      }),
    }));
    return feature
  })
}

const OpenStreetMap = () => {
  useEffect(() => {
    new Map({
      target: 'map',
      layers: [
        new TileLayer({ source: new OSM() }),
        new VectorLayer({
          source: new VectorSource({ features: stationFeatures() })
        })
      ],
      view: new View({
        center: fromLonLat([22, 63]),
        zoom: 4
      })
    })
  }, [])
  return (
    <div id='map' />
  )
}

export default OpenStreetMap
