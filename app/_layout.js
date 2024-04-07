import { useState } from "react";
import { getApps, initializeApp } from "firebase/app";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router/stack";

import { IndexContext } from "./context";
import firebaseConfig from "../firebaseConfig";

const fsApp = initializeApp(firebaseConfig);

// Editing this file with fast refresh will reinitialize the app on every refresh, let's not do that
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const AppLayout = () => {
  const [telemState, setTelemState] = useState({
    isBulbOn: true,
    isFanOn: false,
    isMistOn: false,
    temperature: "",
    humidity: "",
    todayF: true,
    lastWeekF: false,
    lastMonthF: false,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EFF0F1" }}>
      <IndexContext.Provider
        value={{
          telemState,
          setTelemState,
        }}
      >
        <Stack
          screenOptions={{
            statusBarColor: "#309810",
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </IndexContext.Provider>
    </SafeAreaView>
  );
};

export { fsApp };

export default AppLayout;
