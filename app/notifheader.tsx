import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FilterContext } from "./context";

export default function NotifHeader() {
  const { notifFilter, setNotifFilter } = useContext(FilterContext);

  const setActive = (filterN: string) => {
    setNotifFilter(() => {
      return {
        today: false,
        lastWeek: false,
        lastMonth: false,
        [filterN]: true,
      };
    });
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.telem}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Pressable
            style={[
              styles.notifBtnActive,
              { backgroundColor: notifFilter.today ? "#ffffff" : "#3ab913" },
            ]}
            onPress={() => setActive("today")}
          >
            <Text
              style={[
                { fontWeight: "bold" },
                { color: notifFilter.today ? "#000000" : "#ffffff" },
              ]}
            >
              Today
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.notifBtnActive,
              {
                backgroundColor: notifFilter.lastWeek ? "#ffffff" : "#3ab913",
              },
            ]}
            onPress={() => setActive("lastWeek")}
          >
            <Text
              style={[
                { fontWeight: "bold" },
                { color: notifFilter.lastWeek ? "#000000" : "#ffffff" },
              ]}
            >
              Last Week
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.notifBtnActive,
              {
                backgroundColor: notifFilter.lastMonth ? "#ffffff" : "#3ab913",
              },
            ]}
            onPress={() => setActive("lastMonth")}
          >
            <Text
              style={[
                { fontWeight: "bold" },
                { color: notifFilter.lastMonth ? "#000000" : "#ffffff" },
              ]}
            >
              Last Month
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notifBtnActive: {
    borderRadius: 20,
    height: 35,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  tempOver: {
    backgroundColor: "#AD1014",
  },
  telem: {
    marginTop: 20,
    width: "80%",
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
});
