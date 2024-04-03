import { StyleSheet, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>MushrooMonitor</Text>
        <View style={styles.telem}>
          <View style={styles.headerIconContainer}>
            <FontAwesome6 name="temperature-half" size={40} color="white" />
          </View>
          <View style={styles.headerIconContainer}>
            <Fontisto name="blood-drop" size={40} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerIconContainer: {
    borderRadius: 360,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9FDC9E",
  },

  telem: {
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#309810",
    height: "28%",
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  main: {
    flex: 1,
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 45,
    color: "white",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
