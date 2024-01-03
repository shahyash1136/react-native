import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log("Pressed");
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        //style function to handle multiple styles
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}>
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
    backgroundColor: "#72063c",
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
