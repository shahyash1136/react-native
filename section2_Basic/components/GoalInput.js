import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({
  inputValue,
  inputHandler,
  addGoalHandler,
  visible,
  endAddGoalHandler,
}) => {
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          onChangeText={inputHandler}
          style={styles.input}
          value={inputValue}
          placeholder='Your course goal'
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button
              title='Cancel'
              color='#f31282'
              onPress={endAddGoalHandler}
            />
          </View>
          <View style={styles.buttons}>
            <Button title='Add Goal' color='#b180f0' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttons: {
    width: 100,
    marginHorizontal: 8,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    marginBottom: 16,
    padding: 16,
    color: "#120438",
  },
});
