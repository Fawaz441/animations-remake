import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import SlackHeaderContent from "../components/SlackHeaderContent";

const color = "#1c1d22";

const SlackHeader = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <View style={[{ height: insets.top, backgroundColor: color }]} />
      <View style={styles.header}>
        <View style={styles.headeredge}>
          <FontAwesome6 name="angle-left" size={24} color="white" />
        </View>
        <SlackHeaderContent />
        <View style={styles.headeredge}>
          <FontAwesome6 name="headphones" size={24} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SlackHeader;

const styles = StyleSheet.create({
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
