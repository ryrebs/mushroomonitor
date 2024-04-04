import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function NotifHeader() {
  const [deviceState, setDeviceState] = useState({
    temp: 30,
    humidity: 95,
  });

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.telem}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable>
            <Text>Today</Text>
          </Pressable>
          <Pressable>
            <Text>Last Week</Text>
          </Pressable>
          <Pressable>
            <Text>Last Month</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerIconContainer: {
    borderRadius: 360,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9FDC9E",
    marginRight: 10,
  },
  tempOver: {
    backgroundColor: "#AD1014",
  },
  telem: {
    flexDirection: "row",
    marginTop: 25,
    columnGap: 30,
  },
  telemLabel: {
    color: "#ffffff",
    fontSize: 15,
  },
  telemLabel__bold: {
    fontWeight: "bold",
    fontSize: 23,
  },
  main: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#309810",
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  title: {
    fontSize: 35,
    color: "white",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
