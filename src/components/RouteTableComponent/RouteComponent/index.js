// vendor
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Tooltip } from "antd";
import { CloseOutlined, EditOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";

// locale
// store
import { commonState, removeRoute, setCurrentRoute } from "../../../store/slices/commonSlice";
import STYLES from "../../../constants/styles";
import CreateRouteComponent from "../CreateRouteComponent";

const RouteComponent = ({ route }) => {
  const { currentRoute } = useSelector(commonState);
  const [isChangeComponent, setIsChangeComponent] = useState(false);

  const { startPoint, endPoint, routeId } = route;
  const isCurrentRoute = currentRoute.routeId === routeId;
  const { tableText, tableActiveText } = STYLES.color;

  const dispatch = useDispatch();

  const handleSetCurrentRoute = () => dispatch(setCurrentRoute(routeId));
  const handleChangeRoute = () => setIsChangeComponent(!isChangeComponent);
  const handleRemoveRoute = () => dispatch(removeRoute(routeId));

  return !isChangeComponent ? (
    <div className="route_container">
      <div className="points_container" onClick={handleSetCurrentRoute}>
        <div className="point">
          <LoginOutlined style={{ "color": isCurrentRoute ? tableActiveText : tableText, "transform": "scale(1.3)" }} />
          <Tooltip title={startPoint.address}>
            <div className={`point_address${isCurrentRoute ? " current_route" : ""}`}>{startPoint.address}</div>
          </Tooltip>
        </div>
        <div className="point">
          <LogoutOutlined style={{ "color": isCurrentRoute ? tableActiveText : tableText, "transform": "scale(1.3)" }} />
          <Tooltip title={endPoint.address}>
            <div className={`point_address${isCurrentRoute ? " current_route" : ""}`}>{endPoint.address}</div>
          </Tooltip>
        </div>
      </div>
      <div className="buttons_container">
        <div className="button_container">
          <Tooltip title="Изменить">
            <Button className="table_button" type="primary" onClick={handleChangeRoute}>
              <EditOutlined />
            </Button>
          </Tooltip>
        </div>
        <div className="button_container">
          <Tooltip title="Удалить">
            <Button className="table_button" type="primary" onClick={handleRemoveRoute}>
              <CloseOutlined />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  ) : (
    <CreateRouteComponent newRouteId={route.routeId} isChange setIsChange={setIsChangeComponent} />
  );
};

export default RouteComponent;
