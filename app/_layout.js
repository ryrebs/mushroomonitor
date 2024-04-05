import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router/stack";

import { FilterContext } from "./context";

const AppLayout = () => {
  const [notifFilter, setNotifFilter] = useState({
    today: true,
    lastWeek: false,
    lastMonth: false,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EFF0F1" }}>
      <FilterContext.Provider value={{ notifFilter, setNotifFilter }}>
        <Stack
          screenOptions={{
            statusBarColor: "#309810",
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </FilterContext.Provider>
    </SafeAreaView>
  );
};

export default AppLayout;
