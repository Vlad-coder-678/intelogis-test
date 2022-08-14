// для удобства извлечения данных
const mapBoxSelector = (response) => {
  const {
    routes: [{
      geometry: {
        coordinates,
        type,
      },
      legs,
      weight_name,
      weight,
      duration,
      distance,
    }],
    waypoints,
    code,
    uuid,
  } = response;

  return {
    coordinates,
    type,
    legs,
    weight_name,
    weight,
    duration,
    distance,
    waypoints,
    code,
    uuid,
  };
};

export default mapBoxSelector;
