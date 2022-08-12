// vendor
import React from "react";

// locale
// components
import RouteTableComponent from "./components/RouteTableComponent/index.js";
import MapComponent from "./components/MapComponent";
// styles
import "./App.css";
import useDrag from "./hooks/useDrag.js";

const App = () => {
  const {
    leftElementRef: tableContainerRef,
    rightElementRef: mapContainerRef,
    handleDragStart,
    handleDrag,
  } = useDrag();

  return (
    <div className="container">
      <div
        ref={tableContainerRef}
        className="table_container"
      >
        <RouteTableComponent />
      </div>
      <div
        className="draggable_element"
        draggable="true"
        onDragStart={handleDragStart}
        onDrag={handleDrag}
      />
      <div
        ref={mapContainerRef}
        className="map_container"
      >
        <MapComponent />
      </div>
    </div>
  );
}

export default App;
