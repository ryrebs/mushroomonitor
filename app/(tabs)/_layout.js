import React from "react";
import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import NotifHeader from "../notifheader";
import Header from "../header";
import ManualHeader from "../manualheader";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        header: (props) => <Header {...props} />,
        tabBarActiveTintColor: "#309810",
        tabBarIconStyle: {
          marginTop: "5%",
        },
        tabBarStyle: {
          height: 70,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          header: ({ props }) => <NotifHeader {...props} />,
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="manual"
        options={{
          header: ({ props }) => <ManualHeader {...props} />,

          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="question-circle-o" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
