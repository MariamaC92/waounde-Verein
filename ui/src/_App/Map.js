import { MapContainer, TileLayer,Marker,Popup} from "react-leaflet";
import "./CSS/Map.css";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const position = [15.2641251, -12.8677143]
   
  return (
    <MapContainer center={[15.2641251, -12.8677143]}zoom={14}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    
    </Marker>
    
   </MapContainer> 
);
}

