import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/apple_logo.png")}
        ></Image>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal!"
              onPress={addGoalHandler}
              color="#520acc"
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancel}
              color="#f31282"
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#520acc",
    backgroundColor: "white",
    borderRadius: 6,
    color: "black", 
    width: "90%",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 160,
    height: 200,
    margin: 30,
  },
});
