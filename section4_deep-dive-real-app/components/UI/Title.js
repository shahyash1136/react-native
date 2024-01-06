import { StyleSheet, Text } from "react-native";
import React from "react";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "#ffffff",
    textAlign: "center",
    margin: 10,
    padding: 12,
    borderColor: "#ffffff",
    borderWidth: 2,
  },
});
