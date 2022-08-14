import mapboxApiData from "../settings/api";
import mapBoxSelector from "../utilities/api-selector";
import defaultApiResponse from "../store/mock/mapBoxApiResponse";

class MapBoxApi {
  static _getUrl({ startX, startY, endX, endY }) {
    const { baseUrl, route, queryParams } = mapboxApiData;
    const currentRouteCoordinates = `/${startX},${startY};${endX},${endY}`;
    const stringifyQueryParams = Object.entries(queryParams).reduce((result, [key, value], index) => `${result}${key}=${value}${index ? "" : "&"}`, "");
    const url = `${baseUrl}${route}${currentRouteCoordinates}?${stringifyQueryParams}`;

    return url;
  }

  static async callApi({ startX, startY, endX, endY }) {
    try {
      const response = await fetch(this._getUrl({ startX, startY, endX, endY }));
      const data = await response.json();
      const { coordinates } = mapBoxSelector(data);
      console.log("coordinates", coordinates);
      return coordinates;
    } catch (error) {
      console.error("Error api", error);
      const { coordinates } = mapBoxSelector(defaultApiResponse);
      return coordinates;
    }
  }
}

export default MapBoxApi;
