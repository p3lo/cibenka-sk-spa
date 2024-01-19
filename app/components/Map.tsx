import React, { useState, useEffect } from 'react'
import type { LatLngTuple } from 'leaflet'
// import 'leaflet/dist/leaflet.css'

// Define an interface for the dynamically imported components
interface MapComponents {
  MapContainer: React.ComponentType<any>
  TileLayer: React.ComponentType<any>
  Marker: React.ComponentType<any>
  Popup: React.ComponentType<any>
}

const Map = ({ height }: { height: string }) => {
  const [mapComponents, setMapComponents] = useState<MapComponents | null>(null)
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
