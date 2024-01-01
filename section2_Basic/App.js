import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [goals, setGoals] = useState([]);

  const inputHandler = (enteredText) => {
    setInputValue(enteredText);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => {
      return [...currentGoals, inputValue];
    });
    setInputValue("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={inputHandler}
          style={styles.input}
          value={inputValue}
          placeholder='Your course goal'
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goal) => (
          <Text style={styles.goalItem} key={goal}>
            {goal}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#fff",
  },
});
