// vendor
import React from "react";
import { useSelector } from "react-redux";

// locale
// store
import { commonState } from "../../store/slices/commonSlice";
// components
import RouteComponent from "./RouteComponent";
import CreateRouteComponent from "./CreateRouteComponent";

const RouteTableComponent = () => {
  const { routes } = useSelector(commonState);

  return (
    <div className="table">
      {routes?.map((route, index) => (<RouteComponent key={`index ${index}`} route={route} />))}
      <CreateRouteComponent />
    </div>
  );
};

export default RouteTableComponent;
