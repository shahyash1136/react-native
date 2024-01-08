import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Title from "../components/UI/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

const GameOverScreen = ({ roundsNumber, onStartNewGame, userNumber }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, imageStyle]}
            source={require("../assets/images/success.png")}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone need <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
            rounds to guess the number{" "}
            <Text style={styles.highlight}>{userNumber}</Text>.
          </Text>
        </View>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  imageContainer: {
    /* width: deviceWidth < 450 ? 150 : 300,
    height: deviceWidth < 450 ? 150 : 300,
    borderRadius: deviceWidth < 450 ? 75 : 150, */

    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    color: "white",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: colors.primary500,
  },
});
