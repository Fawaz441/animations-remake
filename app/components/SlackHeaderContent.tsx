import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import {
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// exit icon <AntDesign name="close" size={24} color="black" />
// person add icon <AntDesign name="adduser" size={24} color="black" />
// star icon <FontAwesome name="star-o" size={24} color="black" />
// search icon <Feather name="search" size={24} color="black" />
// messages icon <Ionicons name="chatbubbles" size={24} color="black" />
// add canvas icon <MaterialIcons name="post-add" size={24} color="black" />
// pin icon <Ionicons name="chatbubbles" size={24} color="black" />
// files icon <Octicons name="stack" size={24} color="black" />
// bookmarks icon <Ionicons name="folder-outline" size={24} color="black" />
// ellipsi icon <AntDesign name="ellipsis1" size={24} color="black" />
// hours work sheet icon <Ionicons name="folder-outline" size={24} color="black" />
// members icon <AntDesign name="contacts" size={24} color="black" />
// settings and details icon <MaterialCommunityIcons name="cog-outline" size={24} color="black" />
// angle right icon <AntDesign name="right" size={24} color="black" />

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
