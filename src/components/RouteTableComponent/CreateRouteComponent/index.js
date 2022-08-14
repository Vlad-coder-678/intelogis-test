// vendore imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// antd
import { Button, Select, Tooltip } from "antd";
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons";

// locale imports
// store
import { changeRoute, tableState, createRoute } from "../../../store/slices/tableSlice";

const { Option } = Select;

const CreateRouteComponent = ({ newRouteId, isChange, setIsChange }) => {
  const { points } = useSelector(tableState);
  const [fields, setFields] = useState({});
  const isDisabled = typeof fields?.startPoint?.address !== "string" || typeof fields?.endPoint?.address !== "string";

  const dispatch = useDispatch();

  const handleSetFields = (name, value) => setFields(state => ({ ...state, [name]: points[value] }));

  const handleCreateRoute = () => {
    if (!isDisabled) {
      dispatch(isChange ? changeRoute({ routeId: newRouteId, ...fields }) : createRoute({ routeId: newRouteId, ...fields }))
      setFields({});
      if (setIsChange) setIsChange(false);
    }
  };

  const handleRestoreRoute = () => setFields({});

  return (
    <div className="route_container">
      <div className="points_container">
        <Select
          className="point point_select"
          bordered={false}
          value={fields?.startPoint?.name ?? ""}
          onChange={(value) => handleSetFields("startPoint", value)}
        >
          {points.map((point) => (
            <Option value={point.id}>
              {point.name}
            </Option>
          ))}
        </Select>
        <Select
          bordered={false}
          className="point point_select"
          value={fields?.endPoint?.name ?? ""}
          onChange={(value) => handleSetFields("endPoint", value)}
        >
          {points.map((point) => (
            <Option value={point.id}>
              {point.name}
            </Option>
          ))}
        </Select>
      </div>
      <div className="buttons_container">
        <div className="button_container">
          <Tooltip title="Создать">
            <Button
              type="primary"
              disabled={isDisabled}
              className="table_button"
              onClick={handleCreateRoute}
            >
              <PlusOutlined />
            </Button>
          </Tooltip>
        </div>
        <div className="button_container">
          <Tooltip title="Сбросить">
            <Button type="primary" className="table_button" onClick={handleRestoreRoute}>
              <ReloadOutlined />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default CreateRouteComponent;
