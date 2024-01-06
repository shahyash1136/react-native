import { StyleSheet, Text } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.inputLabel, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  inputLabel: {
    fontFamily: "open-sans",
    color: colors.accent500,
    fontSize: 24,
  },
});
