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
  console.log("routes", routes);
  return (
    <div className="table">
      {routes?.map((route) => (<RouteComponent key={route.startPoint} route={route} />))}
      <CreateRouteComponent newRouteId={routes.length} />
    </div>
  );
};

export default RouteTableComponent;
