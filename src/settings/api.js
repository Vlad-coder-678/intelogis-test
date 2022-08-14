const mapBoxToken = null;
const defaultToken = "pk.eyJ1IjoidmxhZDg3NjUiLCJhIjoiY2w2czZtYTZ2MHI4ajNqbjJqdDB5bjRyaCJ9.1Bm1DDVfmQYxynfOjDpLwg";

const mapboxApiData = {
  baseUrl: "https://api.mapbox.com",
  route: "/directions/v5/mapbox/driving", // driving, walking, cycling, driving-traffic
  defaultCoordinates: "/50.581741,36.642882;50.576330,36.582138",
  queryParams: {
    geometries: "geojson", // geojson, polygon, polygon6
    access_token: mapBoxToken ?? defaultToken,
  },
  exampleUrl: "https://api.mapbox.com/directions/v5/mapbox/driving/50.581741,36.642882;50.576330,36.582138?geometries=geojson&access_token=pk.eyJ1IjoidmxhZDg3NjUiLCJhIjoiY2w2czZtYTZ2MHI4ajNqbjJqdDB5bjRyaCJ9.1Bm1DDVfmQYxynfOjDpLwg",
};

export default mapboxApiData;
