// vendor imports
import React from "react";
import { useSelector } from "react-redux";
// antd
import { Loading3QuartersOutlined } from "@ant-design/icons";

// locale imports
// store
import { mapState } from "./store/slices/mapSlice.js";
// hooks
import useDrag from "./hooks/useDrag.js";
// components
import RouteTableComponent from "./components/RouteTableComponent/index.js";
import MapComponent from "./components/MapComponent";

const App = () => {
  const { isLoading } = useSelector(mapState);
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
      <div className={`loading_modal${isLoading ? " open_loading_modal" : " close_loading_modal"}`}>
        <Loading3QuartersOutlined spin className="loading_icon" />
      </div>
    </div>
  );
}

export default App;
