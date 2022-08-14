// locale imports
// settings
import mapboxApiData from "../settings/api";
// utilities
import mapBoxSelector from "../utilities/api-selector";

class MapBoxApi {
  // возвращает Url с параметрами для запроса
  static _getUrl({ startX, startY, endX, endY }) {
    const { baseUrl, route, queryParams } = mapboxApiData;
    const currentRouteCoordinates = `/${startX},${startY};${endX},${endY}`;
    const stringifyQueryParams = Object.entries(queryParams).reduce((result, [key, value]) => `${result}${key}=${value}&`, "");
    const url = `${baseUrl}${route}${currentRouteCoordinates}?${stringifyQueryParams}`;

    return url;
  }

  // делает запрос за массивом координат для построения дорожного маршрута
  // если данные не пришли, выводит текст ошибки в консоль, возвращая координаты начальной и конечной точки
  static async callApi({ startX, startY, endX, endY }) {
    try {
      const response = await fetch(this._getUrl({ startX, startY, endX, endY }));
      const data = await response.json();
      const { coordinates } = mapBoxSelector(data);
      return [[startX, startY], ...coordinates, [endX, endY]];
    } catch (error) {
      console.error("Error:", error.message);
      return [[startX, startY], [endX, endY]];
    }
  }
}

export default MapBoxApi;
