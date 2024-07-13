"use client"

import { Placemark, YMaps , Map } from '@pbe/react-yandex-maps'
import React from 'react'

const MapContent = () => {
  return (
    <YMaps>
    <Map
      width="100%"
      defaultState={{ center: [41.303532, 69.248622], zoom: 9 }}
      className="iframe"
    >
      <Placemark
        options={{
          iconLayout: "default#image",
          iconImageHref: "/placemark.svg",
          iconImageSize: [120, 120],
          iconColor:"red",
        }}
        geometry={[41.303532, 69.248622]}
        iconImageOffset={[-0, -0]}
        // Offset of the layer with content relative to the layer with the image.
        iconContentOffset={[0, 0]}
        className="map-img animated-image"
      />
    </Map>
  </YMaps>
  )
}

export default MapContent