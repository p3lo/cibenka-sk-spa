import React, { useState, useEffect } from 'react'
import type { LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css' // Re-uses images from ~leaflet package

// import markerIcon from 'leaflet/dist/images/marker-icon.png'
// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
// import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Define an interface for the dynamically imported components
interface MapComponents {
  MapContainer: React.ComponentType<any>
  TileLayer: React.ComponentType<any>
  Marker: React.ComponentType<any>
  Popup: React.ComponentType<any>
}

const Map = ({ height }: { height: string }) => {
  const [mapComponents, setMapComponents] = useState<MapComponents | null>(null)
  // const [marker, setMarker] = useState<any>(null)
  const position: LatLngTuple = [49.1234, 18.32672]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamically import the react-leaflet components
      import('react-leaflet')
        .then(components => {
          setMapComponents(components)
        })
        .catch(error =>
          console.error('Failed to load react-leaflet components', error),
        )
      // import('leaflet')
      //   .then(leaflet => {
      //     const markerIconSec = leaflet.icon({
      //       iconUrl: markerIcon,
      //       iconRetinaUrl: markerIcon2x,
      //       shadowUrl: markerShadow,
      //       iconSize: [25, 41],
      //       iconAnchor: [12, 41],
      //       popupAnchor: [1, -34],
      //       tooltipAnchor: [16, -28],
      //       shadowSize: [41, 41],
      //     })
      //     setMarker(markerIconSec)
      //   })
      //   .catch(error => console.error('Failed to load leaflet', error))
    }
  }, [])

  if (!mapComponents) {
    return <div style={{ height }}>Loading map...</div>
  }

  const { MapContainer, TileLayer, Marker, Popup } = mapComponents

  return (
    <div style={{ height }}>
      <MapContainer
        style={{ height: '100%' }}
        center={position}
        zoom={17}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Advokátska kancelária JUDr. Jaroslav Čibenka s.r.o.</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
