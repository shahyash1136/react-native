import React, { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (enteredText) => {
    setInputValue(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(inputValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 0 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  const resetInputHandler = () => {
    setInputValue("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        value={inputValue}
        style={styles.numberInput}
        maxLength={2}
        onChangeText={inputHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
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

  numberInput: {
    height: 50,
    width: 80,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    paddingHorizontal: 16,
    textAlign: "center",
    fontWeight: "bold",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    flex: 1,
  },
});
