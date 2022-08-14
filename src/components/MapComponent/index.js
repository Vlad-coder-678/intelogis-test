// vendor
import React from "react";
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { mapState } from "../../store/slices/mapSlice";

// locale
// store
import { tableState } from "../../store/slices/tableSlice";

const MapComponent = () => {
  const { currentRoute } = useSelector(tableState);
  const { currentMapCenter, currentPolylineCoordinates } = useSelector(mapState);
  const { startPoint, endPoint } = currentRoute;
  console.log("currentPolylineCoordinates", currentPolylineCoordinates);

  return (
    <MapContainer
      center={currentMapCenter.position}
      zoom={11}
      scrollWheelZoom={false}
    >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={startPoint.position}>
      <Popup>
        Точка № {startPoint.id + 1} <br />{startPoint.address}
      </Popup>
    </Marker>
    <Polyline pathOptions={{ color: "lime" }} positions={[currentPolylineCoordinates]} />
    <Marker position={endPoint.position}>
      <Popup>
        Точка № {endPoint.id + 1} <br />{endPoint.address}
      </Popup>
    </Marker>
    </MapContainer>
  );
};

export default MapComponent;
