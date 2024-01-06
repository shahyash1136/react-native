import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
