// vendor
import React, { useCallback, useEffect, useState } from "react";
// import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";

// locale
// store
import { commonState, setCurrentMapCenter } from "../../store/slices/commonSlice";
import responseApi from "../../store/mock/responseApi";
// settings
// import { mapboxApiData } from "../../settings";

const MapComponent = () => {
  const { currentMapCenter, currentRoute } = useSelector(commonState);
  const { startPoint, endPoint } = currentRoute;
  const [polylineCoordinates, setPolylineCoordinates] = useState([]);

  const dispatch = useDispatch();

  // const { baseUrl, route, queryParams } = mapboxApiData;
  // const currentRouteCoordinates = `/${startPoint.position[0]},${startPoint.position[1]};${endPoint.position[0]},${endPoint.position[1]}`;
  // const stringifyQueryParams = Object.entries(queryParams).reduce((result, [key, value], index) => `${result}${key}=${value}${index ? "" : "&"}`, "");
  // const url = `${baseUrl}${route}${currentRouteCoordinates}?${stringifyQueryParams}`;
  // console.log("url", url);
  useEffect(() => {
    // async function getCoordinates() {
    //     const response = await fetch(url);
    //     const data = await response.json();
    // console.log("data", data);
    try {
      const { routes: [{ geometry: { coordinates } }] } = responseApi;
      setPolylineCoordinates(coordinates);
    } catch (error) {
      console.log("error", error);
      const { routes: [{ geometry: { coordinates } }] } = responseApi;
      setPolylineCoordinates(coordinates);
    }
    // }

    // getCoordinates();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCurrentMapCenter = useCallback(() => {
    return ({
      position: [
        (startPoint.position[0] + endPoint.position[0]) / 2,
        (startPoint.position[1] + endPoint.position[1]) / 2,
      ],
    });
  }, [endPoint.position, startPoint.position]);

  useEffect(() => {
    dispatch(setCurrentMapCenter(getCurrentMapCenter()));
  }, [currentRoute, dispatch, getCurrentMapCenter]);

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
    <Polyline pathOptions={{ color: "lime" }} positions={[polylineCoordinates]} />
    <Marker position={endPoint.position}>
      <Popup>
        Точка № {endPoint.id + 1} <br />{endPoint.address}
      </Popup>
    </Marker>
    </MapContainer>
  );
};

export default MapComponent;
