import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function Header() {
  const [deviceState, setDeviceState] = useState({
    temp: 30,
    humidity: 95,
  });

  return (
    <View style={styles.main}>
      <Text style={styles.title}>MushrooMonitor</Text>
      <View style={styles.telem}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={[
              styles.headerIconContainer,
              deviceState.temp > 28 ? styles.tempOver : null,
            ]}
          >
            <FontAwesome6 name="temperature-half" size={40} color="white" />
          </View>
          <View>
            <Text style={[styles.telemLabel, styles.telemLabel__bold]}>
              {deviceState.temp > 0 ? deviceState.temp : "-"}&#176;C
            </Text>
            <Text style={styles.telemLabel}>Temp</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={[
              styles.headerIconContainer,
              deviceState.humidity > 95 ? styles.tempOver : null,
            ]}
          >
            <Fontisto name="blood-drop" size={40} color="white" />
          </View>
          <View>
            <Text style={[styles.telemLabel, styles.telemLabel__bold]}>
              {deviceState.humidity > 0 ? deviceState.humidity : "-"}%
            </Text>
            <Text style={styles.telemLabel}>Humidity</Text>
          </View>
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
