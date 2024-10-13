import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const screenWidth = Dimensions.get("window").width;

const color = "#222429";

const SlackHeaderContent = () => {
  const width = useSharedValue(screenWidth - 100);
  const left = useSharedValue(50);
  const height = useSharedValue(45);

  const animatedStyles = useAnimatedStyle(() => ({
    width: withTiming(width.value),
    left: withTiming(left.value),
    height: withTiming(height.value),
  }));

  const animate = () => {
    width.value = screenWidth;
    left.value = 0;
    height.value = 400;
  };

  return (
    <>
      <View style={styles.shadow} />
      <TouchableWithoutFeedback onPress={animate}>
        <Animated.View style={[animatedStyles, styles.container]}>
          <FontAwesome name="lock" size={20} color="white" />
          <View>
            <Text style={styles.channelname}>tech-point</Text>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default SlackHeaderContent;

const styles = StyleSheet.create({
  shadow: {
    height: 50,
    flex: 1,
  },
  container: {
    backgroundColor: color,
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
    position: "absolute",
    top: 0,
    zIndex: 2,
  },
  channelname: {
    color: "white",
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
  },
});
