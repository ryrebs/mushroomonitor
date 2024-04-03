import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { SafeAreaView } from "react-native-safe-area-context";

import Footer from "./footer";
import Header from "./header";

const Root = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Slot />
      <Footer />
    </SafeAreaView>
  );
};

export default Root;
