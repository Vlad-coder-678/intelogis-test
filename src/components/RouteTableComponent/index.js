// vendor
import React from "react";
import { useSelector } from "react-redux";

// locale
// store
import { tableState } from "../../store/slices/tableSlice";
// components
import RouteComponent from "./RouteComponent";
import CreateRouteComponent from "./CreateRouteComponent";

const RouteTableComponent = () => {
  const { routes } = useSelector(tableState);

  return (
    <div className="table">
      {routes?.map((route) => (<RouteComponent key={route.startPoint} route={route} />))}
      <CreateRouteComponent newRouteId={routes.length} />
    </div>
  );
};

export default RouteTableComponent;
