import React from "react";
import { StyleSheet, View } from "react-native";

const CenterView = ({ children }: any) => {
  return <View style={styles.main}>{children}</View>;
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

export default CenterView;
