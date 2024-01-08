import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import colors from "../constants/colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
  const [inputValue, setInputValue] = useState("");

  const { width, height } = useWindowDimensions();

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
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={styles.rootContainer}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter your number:</InstructionText>
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
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
