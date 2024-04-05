import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Manual() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          1. Home Page:
        </Text>
        <View
          style={{
            marginVertical: 15,
          }}
        >
          <Text
            style={{
              marginVertical: 10,
              textAlignVertical: "center",
              lineHeight: 20,
            }}
          >
            &#x25CF; View real-time temperature and humidity levels in your
            mushroom growing chamber.
          </Text>
          <Text
            style={{
              marginVertical: 10,
              textAlignVertical: "center",
              lineHeight: 20,
            }}
          >
            &#x25CF; Monitor if the system is functional and check which
            components are currently on.
          </Text>
          <Text
            style={{
              marginVertical: 10,
              textAlignVertical: "center",
              lineHeight: 20,
            }}
          >
            &#x25CF; Check the normal temperature and humidity levels for
            optimal oyster mushroom growth.
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          2. Notifications:
        </Text>
        <View
          style={{
            marginVertical: 15,
          }}
        >
          <Text
            style={{
              marginVertical: 10,
              textAlignVertical: "center",
              lineHeight: 20,
            }}
          >
            &#x25CF; The app is designed to keep your mushroom cultivation
            environment in check. It will send you notifications when
            temperature or humidity levels exceed normal thresholds.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    padding: 30,
    borderRadius: 20,
    marginVertical: 30,
    marginHorizontal: 20,
    backgroundColor: "#ffffff",
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
