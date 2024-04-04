import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DevLabel = ({ isOn, label }: any) => (
  <Text
    style={{
      marginTop: 4,
      color: isOn ? "#ffffff" : "#000000",
    }}
  >
    {label}
  </Text>
);

export default function Index() {
  const [deviceState, setDeviceState] = useState({
    bulb: true,
    fan: false,
    sprinkler: false,
    humidifier: false,
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          columnGap: 20,
        }}
      >
        <View
          style={[
            styles.deviceBgStyle,
            deviceState.bulb ? styles.deviceBgOnStyle : styles.deviceBgOffStyle,
          ]}
        >
          <Foundation
            name="lightbulb"
            style={[
              deviceState.bulb
                ? styles.deviceIconOnStyle
                : styles.deviceIconOffStyle,
            ]}
          />
          <DevLabel isOn={deviceState.bulb} label="Bulb" />
        </View>
        <View
          style={[
            styles.deviceBgStyle,
            deviceState.fan ? styles.deviceBgOnStyle : styles.deviceBgOffStyle,
          ]}
        >
          <MaterialCommunityIcons
            name="fan"
            style={[
              deviceState.fan
                ? styles.deviceIconOnStyle
                : styles.deviceIconOffStyle,
            ]}
          />
          <DevLabel isOn={deviceState.fan} label="Fan" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          columnGap: 20,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <View
          style={[
            styles.deviceBgStyle,
            deviceState.sprinkler
              ? styles.deviceBgOnStyle
              : styles.deviceBgOffStyle,
          ]}
        >
          <MaterialCommunityIcons
            name="sprinkler"
            style={[
              deviceState.sprinkler
                ? styles.deviceIconOnStyle
                : styles.deviceIconOffStyle,
            ]}
          />
          <DevLabel isOn={deviceState.sprinkler} label="Sprinkler" />
        </View>
        <View
          style={[
            styles.deviceBgStyle,
            deviceState.humidifier
              ? styles.deviceBgOnStyle
              : styles.deviceBgOffStyle,
          ]}
        >
          <MaterialCommunityIcons
            name="air-humidifier"
            style={[
              deviceState.humidifier
                ? styles.deviceIconOnStyle
                : styles.deviceIconOffStyle,
            ]}
          />
          <DevLabel isOn={deviceState.humidifier} label="Humidifier" />
        </View>
      </View>
      <View style={styles.devNormalIndicator}>
        <Text>Normal Temperature Levels</Text>
        <Text>23&#176;C - 28&#176;C</Text>
      </View>
      <View style={styles.devNormalIndicator}>
        <Text>Normal Humidity Levels</Text>
        <Text>80% - 95%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  deviceIconOffStyle: {
    color: "#309810",
    fontSize: 60,
  },
  deviceIconOnStyle: {
    color: "#ffffff",
    fontSize: 60,
  },
  deviceBgStyle: {
    height: 110,
    width: 110,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  deviceBgOffStyle: {
    backgroundColor: "#ffffff",
  },
  deviceBgOnStyle: {
    backgroundColor: "#309810",
  },
  devNormalIndicator: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: "80%",
    height: 75,
    borderRadius: 15,
    rowGap: 5,
    margin: 10,
  },
});
