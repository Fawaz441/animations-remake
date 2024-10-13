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
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface SlackHeaderContentProps {
  active: boolean;
  setActive: (_: boolean) => void;
}

const screenWidth = Dimensions.get("window").width;
const color = "#222429";

const initialHeight = 45;
const initialWidth = screenWidth - 100;
const initialLeft = 50;
const activeWidth = screenWidth - 10;
const activeLeft = 5;
const activeHeight = 400;

const SlackHeaderContent = ({ active, setActive }: SlackHeaderContentProps) => {
  const height = useDerivedValue(
    () => (active ? activeHeight : initialHeight),
    [active]
  );
  const left = useDerivedValue(
    () => (active ? activeLeft : initialLeft),
    [active]
  );
  const width = useDerivedValue(
    () => (active ? activeWidth : initialWidth),
    [active]
  );

  const animatedStyles = useAnimatedStyle(() => ({
    width: withTiming(width.value),
    left: withTiming(left.value),
    height: withTiming(height.value),
  }));

  const animate = () => {
    setActive(true);
  };

  return (
    <>
      <View style={styles.shadow} />
      <TouchableWithoutFeedback onPress={animate}>
        <Animated.View style={[animatedStyles, styles.container]}>
          <View style={styles.channeldetails}>
            <FontAwesome name="lock" size={20} color="white" />
            <View>
              <Text style={styles.channelname}>tech-point</Text>
            </View>
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
  channeldetails: {
    height: initialHeight,
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
  },
  container: {
    backgroundColor: color,
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 10,

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
