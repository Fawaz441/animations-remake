import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Animations Remake", headerShown: false }}
      />
    </Stack>
  );
}
