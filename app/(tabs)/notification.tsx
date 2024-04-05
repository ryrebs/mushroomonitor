import { useContext, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { FilterContext } from "../context";

const now = new Date();

export default () => {
  const [notifs, setNotifs] = useState([
    {
      content:
        "System detected that temperature levels is high. System detected that temperature levels is high System detected that temperature levels \
    temperature levels is high System detected that temperature levels is \
    high System detected that temperature levels is high System detected \
    that temperature levels is high System detected that temperature \
    levels is high",
      timestamp: new Date(),
    },
    {
      content:
        "1 System detected that temperature levels is high. System detected that \
    temperature levels is high System detected that temperature levels is \
    high System detected that temperature levels is high System detected \
    that temperature levels is high System detected that temperature \
    levels is high",
      time: "11:55 AM",
      date: "October 6, 2023",
      timestamp: new Date(),
    },
    {
      content:
        "3 System detected that temperature levels is high. System detected that \
    temperature levels is high System detected that temperature levels is \
    high System detected that temperature levels is high System detected \
    that temperature levels is high System detected that temperature \
    levels is high",
      time: "10:55 AM",
      date: "October 5, 2023",
      timestamp: new Date(new Date(now).setDate(now.getDate() - 30)),
    },
    {
      content:
        "2 System detected that temperature levels is high. System detected that \
    temperature levels is high System detected that temperature levels is \
    high System detected that temperature levels is high System detected \
    that temperature levels is high System detected that temperature \
    levels is high",
      time: "10:55 AM",
      date: "October 6, 2023",
      timestamp: new Date(new Date(now).setDate(now.getDate() - 7)),
    },
  ]);

  const { notifFilter } = useContext(FilterContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        {notifs
          .sort((a: any, b: any) => b.timestamp - a.timestamp)
          .map((ntfs, i) => (
            <View
              key={i}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 30,
                marginVertical: 10,
                backgroundColor: "#ffffff",
                borderRadius: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>
                  {ntfs.timestamp.toDateString()}
                </Text>
                <Text>{ntfs.timestamp.toLocaleTimeString()}</Text>
              </View>
              <Text
                style={{
                  textAlign: "justify",
                }}
              >
                {ntfs.content}
              </Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
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
