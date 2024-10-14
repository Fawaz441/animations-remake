import {
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import SlackHeaderContent from "../components/SlackHeaderContent";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

const color = "#1c1d22";

const SlackHeader = () => {
  const insets = useSafeAreaInsets();
  const { height, width } = useWindowDimensions();
  const [channelHeaderActive, setChannelHeaderActive] = useState(false);

  const backdropOpacity = useDerivedValue(
    () => (channelHeaderActive ? 1 : 0),
    [channelHeaderActive]
  );
  const backdropStyles = useAnimatedStyle(() => ({
    opacity: withTiming(backdropOpacity.value),
  }));

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <View style={[{ height: insets.top, backgroundColor: color }]} />
      <TouchableWithoutFeedback
        disabled={!channelHeaderActive}
        onPress={() => setChannelHeaderActive(false)}
      >
        <Animated.View
          style={[
            styles.backdrop,
            backdropStyles,
            { width, height: height - insets.top, top: insets.top },
          ]}
        />
      </TouchableWithoutFeedback>
      <View style={styles.header}>
        <View style={styles.headeredge}>
          <FontAwesome6 name="angle-left" size={24} color="white" />
        </View>
        <SlackHeaderContent
          active={channelHeaderActive}
          setActive={setChannelHeaderActive}
        />
        <View style={styles.headeredge}>
          <FontAwesome6 name="headphones" size={24} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SlackHeader;

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    flex: 1,
  },
  header: {
    paddingBottom: 4,
    height: 50,
    backgroundColor: color,
    borderBottomWidth: 1,
    borderBottomColor: "#2C2D32",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headeredge: {
    width: 50,
    flexShrink: 0,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
