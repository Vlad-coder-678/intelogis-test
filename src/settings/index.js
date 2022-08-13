const mapBoxToken = "pk.eyJ1IjoiZXZnZW5pYS1rdXJpbmV2YSIsImEiOiJja3VoOTRvM3kyYnV6MzFtbzhobXF2bTNiIn0.hvi_FcwB8eE9lc5IQspdxg";

const mapboxApiData = {
  baseUrl: "https://api.mapbox.com",
  route: "/directions/v5/mapbox/driving", // driving, walking, cycling, driving-traffic
  points: "/13.43,52.51;13.42,52.5;13.41,52.5",
  queryParams: {
    geometries: "geojson",
    access_token: mapBoxToken,
  },
};

const exampleUrl = "https://api.mapbox.com/directions/v5/mapbox/cycling/50.581741,36.642882;50.576330,36.582138?geometries=geojson&access_token=pk.eyJ1IjoiZXZnZW5pYS1rdXJpbmV2YSIsImEiOiJja3VoOTRvM3kyYnV6MzFtbzhobXF2bTNiIn0.hvi_FcwB8eE9lc5IQspdxg";

export {
  mapBoxToken,
  mapboxApiData,
  exampleUrl,
};
