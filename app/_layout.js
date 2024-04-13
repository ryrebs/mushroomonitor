import { useState, useEffect } from "react";
import { getApps, initializeApp } from "firebase/app";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router/stack";
import { IndexContext } from "./context";
import {
  getFirestore,
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq2gc3jCYGX7vQinF-v7xGdzBdqSMCsC0",
  authDomain: "mushroomonitor.firebaseapp.com",
  projectId: "mushroomonitor",
  storageBucket: "mushroomonitor.appspot.com",
  messagingSenderId: "909525684111",
  appId: "1:909525684111:web:cfca3e8c013ed11bf8c5fa",
  measurementId: "G-QEPBDY56L3",
};

const fsApp = initializeApp(firebaseConfig);

// Editing this file with fast refresh will reinitialize the app on every refresh, let's not do that
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const db = getFirestore(fsApp);
const telemRef = collection(db, "sensor_data");

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
    timestamp: "",
  });

  // Listen for changes
  useEffect(() => {
    const getData = async () => {
      const q = query(telemRef, orderBy("timestamp", "desc"), limit(1));
      onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change: any) => {
          if (change.type === "added") {
            const {
              humidity,
              isBulbOn,
              isFanOn,
              isMistOn,
              temperature,
              timestamp,
            } = change.doc.data();
            setTelemState((prev: any) => ({
              ...prev,
              humidity,
              isBulbOn,
              isFanOn,
              isMistOn,
              temperature,
              timestamp,
            }));
          }
        });
      });
    };
    getData();
  }, []);

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
