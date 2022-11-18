import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";
import style from "./style";

const CenterView = ({ children }) => {
  return <View style={style.main}>{children}</View>;
};

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};

export default CenterView;
