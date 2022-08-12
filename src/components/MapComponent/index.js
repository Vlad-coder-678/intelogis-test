// vendor
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";

// locale
// constants
import POINTS from "../../store/mock/points";
// store
import { commonState } from "../../store/slices/commonSlice";

const MapComponent = () => {
  const { currentPoint } = useSelector(commonState);

  return (
    <MapContainer
      center={currentPoint.position}
      zoom={13}
      scrollWheelZoom={false}
    >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {POINTS.map(({ id, address, position }) => (
      <Marker key={id} position={position}>
        <Popup>
          Точка № {id + 1} <br />{address}
        </Popup>
      </Marker>
    ))}
    </MapContainer>
  );
};

export default MapComponent;
