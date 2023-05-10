import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./CSS/Map.css";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";


export default function Map({attr}) {
  const position = [attr.latitude, attr.longitude];

  const markerIcon = new Icon({
    iconUrl: process.env.PUBLIC_URL + `/images/${attr.overlay_file}`,
    iconSize: [30, 30],
  });

  return (
      <MapContainer center={position} zoom={`${attr.zoom}`}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  );

}

