// vendore
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// antd
import { Button, Select } from 'antd';

// locale
// store
import { commonState, createRoute } from "../../../store/slices/commonSlice";

const { Option } = Select;

const CreateRouteComponent = () => {
  const [fields, setFields] = useState({});
  const { points } = useSelector(commonState);
  const dispatch = useDispatch();

  // const isDisabled = () => {
  //   console.log("isDisabled", fields);
  //   const { startpoint: { address: startAdress }, endPoint: { address: endAddress } } = fields;
  //   return (typeof startAdress === "string" && typeof endAddress === "string");
  // };

  const handleSetFields = (name, value) => setFields(state => ({ ...state, [name]: points[value] }));

  const handleCreateRoute = () => {
    dispatch(createRoute(fields));
  };

  return (
    <div className="create_route_container">
      <Select onChange={(value) => handleSetFields("startPoint", value)}>
        {points.map((point) => <Option value={point.id}>{point.address}</Option>)}
      </Select>
      <Select onChange={(value) => handleSetFields("endPoint", value)}>
        {points.map((point) => <Option value={point.id}>{point.address}</Option>)}
      </Select>
      <Button type="primary" className="create_route_button" onClick={handleCreateRoute}>Создать</Button>
    </div>
  );
};

export default CreateRouteComponent;
