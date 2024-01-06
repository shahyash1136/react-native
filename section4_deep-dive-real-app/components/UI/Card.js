import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: colors.primary800,
    alignItems: "center",
    justifyContent: "center",

    //shadow for android starts here
    elevation: 4,
    //shadow for android ends here

    //shadow for ios starts here
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    //shadow for ios ends here
  },
});
