"use client";

import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";

import {MapContainer} from 'react-leaflet/MapContainer'
import {TileLayer} from 'react-leaflet/TileLayer'

export default function Map({value}: { value: { lat: number, lng: number }, isInline: boolean }) {
    return <MapContainer center={[value.lat, value.lng]} zoom={10} style={{height: 400}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </MapContainer>
}