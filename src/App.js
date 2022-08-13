// vendor
import React from "react";

// locale
// hooks
import useDrag from "./hooks/useDrag.js";
// components
import RouteTableComponent from "./components/RouteTableComponent/index.js";
import MapComponent from "./components/MapComponent";
// styles
import "./App.css";

const App = () => {
  const {
    leftElementRef: tableContainerRef,
    rightElementRef: mapContainerRef,
    handleDragStart,
    handleDrag,
  } = useDrag();

  return (
    <div className="container">
      <div className="table_container" ref={tableContainerRef}>
        <RouteTableComponent />
      </div>
      <div
        className="draggable_element"
        draggable="true"
        onDragStart={handleDragStart}
        onDrag={handleDrag}
      />
      <div className="map_container" ref={mapContainerRef}>
        <MapComponent />
      </div>
    </div>
  );
}

export default App;
