import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text, deleteGoalHandler, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => deleteGoalHandler(id)}
        style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    padding: 8,
    color: "#fff",
  },
});
