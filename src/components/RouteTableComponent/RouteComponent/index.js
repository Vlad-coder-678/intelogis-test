// vendor imports
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Tooltip } from "antd";
import { CloseOutlined, EditOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";

// locale imports
// constants
import STYLES from "../../../constants/styles";
// store
import { tableState, removeRoute, setCurrentRoute } from "../../../store/slices/tableSlice";
import { setCurrentMapCenter, setIsLoading } from "../../../store/slices/mapSlice";
// components
import CreateRouteComponent from "../CreateRouteComponent";

const RouteComponent = ({ route }) => {
  const { currentRoute } = useSelector(tableState);
  const [isChangeComponent, setIsChangeComponent] = useState(false);

  const { startPoint, endPoint, routeId } = route;
  const isCurrentRoute = currentRoute.routeId === routeId;
  const { tableText, tableActiveText } = STYLES.color;

  const dispatch = useDispatch();

  const getCurrentMapCenter = useCallback(() => {
    return ({
      position: [
        (startPoint.position[0] + endPoint.position[0]) / 2,
        (startPoint.position[1] + endPoint.position[1]) / 2,
      ],
    });
  }, [endPoint.position, startPoint.position]);

  const handleSetCurrentRoute = () => {
    dispatch(setCurrentMapCenter(getCurrentMapCenter()));
    dispatch(setCurrentRoute(routeId));
    dispatch(setIsLoading({
      startX: startPoint.position[0],
      startY: startPoint.position[1],
      endX: endPoint.position[0],
      endY: endPoint.position[1],
    }));
  };
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
