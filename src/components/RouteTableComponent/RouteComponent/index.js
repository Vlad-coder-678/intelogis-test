// vendor
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "antd";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";

// locale
// store
import { commonState, setCurrentRoute } from "../../../store/slices/commonSlice";
import STYLES from "../../../constants/styles";

const RouteComponent = ({ route }) => {
  const { startPoint, endPoint } = route;
  const { currentRoute: { routeId } } = useSelector(commonState);
  const isCurrentRoute = routeId === route.routeId;

  const dispatch = useDispatch();

  const handleSetCurrentRoute = () => dispatch(setCurrentRoute(route.routeId));

  return (
    <div className="route_container" onClick={handleSetCurrentRoute}>
      <div className="route_point">
        <LoginOutlined style={{ "color": isCurrentRoute ? STYLES.tableActiveTextColor : STYLES.tableTextColor, "transform": "scale(1.3)" }} />
        <Tooltip title={startPoint.address}>
          <div className={`route_address${isCurrentRoute ? " current_route" : ""}`}>{startPoint.address}</div>
        </Tooltip>
      </div>
      <div className="route_point">
        <LogoutOutlined style={{ "color": isCurrentRoute ? STYLES.tableActiveTextColor : STYLES.tableTextColor, "transform": "scale(1.3)" }} />
        <Tooltip title={endPoint.address}>
          <div className={`route_address${isCurrentRoute ? " current_route" : ""}`}>{endPoint.address}</div>
        </Tooltip>
      </div>
    </div>
  );
};

export default RouteComponent;
