import { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { IndexContext } from "../context";

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
  const { telemState, setTelemState } = useContext(IndexContext);
  const [fntSize, setFntSize] = useState(0);

  const onTelemLabelLayout = (event: any) => {
    const { _, height } = event.nativeEvent.layout;
    setFntSize(height);
  };

  return (
    <View style={styles.container}>
      <View style={styles.deviceContainer}>
        <View
          style={[
            styles.deviceBgStyle,
            telemState.temperature <= 25
              ? styles.deviceBgOnStyle
              : styles.deviceBgOffStyle,
          ]}
        >
          <Foundation
            name="lightbulb"
            style={[
              telemState.temperature <= 25
                ? styles.deviceIconOnStyle
                : styles.deviceIconOffStyle,
            ]}
          />
          <DevLabel isOn={telemState.temperature <= 25} label="Bulb" />
        </View>
        <View style={[styles.deviceBgStyle, styles.deviceBgOnStyle]}>
          <MaterialCommunityIcons
            name="fan"
            style={[styles.deviceIconOnStyle]}
          />
          <DevLabel isOn={true} label="Fan" />
        </View>

        <View
          style={[
            styles.deviceBgStyle,
            telemState.humidity <= 90
              ? styles.deviceBgOnStyle
              : styles.deviceBgOffStyle,
          ]}
        >
          <MaterialCommunityIcons
            name="sprinkler"
            style={[
              telemState.humidity <= 90
                ? styles.deviceIconOnStyle
                : styles.deviceIconOffStyle,
            ]}
          />
          <DevLabel isOn={telemState.humidity <= 90} label="Mistmaker" />
        </View>
      </View>
      <View style={styles.labelIndContainer}>
        <View style={styles.devNormalIndicator} onLayout={onTelemLabelLayout}>
          <Text
            style={{
              fontSize: fntSize * 0.25,
            }}
          >
            Normal Temperature Levels
          </Text>
          <Text
            style={{
              fontSize: fntSize * 0.25,
            }}
          >
            23&#176;C - 28&#176;C
          </Text>
        </View>
        <View style={styles.devNormalIndicator}>
          <Text
            style={{
              fontSize: fntSize * 0.25,
            }}
          >
            Normal Humidity Levels
          </Text>
          <Text
            style={{
              fontSize: fntSize * 0.25,
            }}
          >
            80% - 95%
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  deviceContainer: {
    marginTop: "6%",
    height: "60%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    alignContent: "center",
    columnGap: 10,
    rowGap: 10,
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
    height: "45%",
    width: "40%",
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
    height: "40%",
    borderRadius: 15,
    rowGap: 2,
  },
  labelIndContainer: {
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 5,
  },
});
