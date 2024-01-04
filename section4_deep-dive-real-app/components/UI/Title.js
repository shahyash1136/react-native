import { StyleSheet, Text } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    margin: 10,
    padding: 12,
    borderColor: "#ffffff",
    borderWidth: 2,
  },
});
