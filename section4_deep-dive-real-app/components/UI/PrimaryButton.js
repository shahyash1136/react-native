import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        //style function to handle multiple styles
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: colors.primary600 }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: colors.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    //shadow for android starts here
    elevation: 2,
    //shadow for android ends here
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
