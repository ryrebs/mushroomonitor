import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router/stack";

import Header from "./header";

const AppLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EFF0F1" }}>
      <Stack
        screenOptions={{
          statusBarColor: "#309810",
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaView>
  );
};

export default AppLayout;
