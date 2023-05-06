import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./CSS/Map.css";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";


const position = [15.2641251, -12.8677143];

const markerIcon = new Icon({
  iconUrl: require("../_App/Images/marker.png"),
  iconSize: [35, 45],
});

export default function Map() {

  return (

    <MapContainer center={position} zoom={14}>

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

