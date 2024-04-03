import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: "red"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
