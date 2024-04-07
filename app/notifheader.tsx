import { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { IndexContext } from "./context";

export default function NotifHeader() {
  const { telemState, setTelemState } = useContext(IndexContext);

  const setActive = (filterN: string) => {
    setTelemState((prev: any) => {
      return {
        ...prev,
        todayF: false,
        lastWeekF: false,
        lastMonthF: false,
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
              { backgroundColor: telemState.todayF ? "#ffffff" : "#3ab913" },
            ]}
            onPress={() => setActive("todayF")}
          >
            <Text
              style={[
                { fontWeight: "bold" },
                { color: telemState.todayF ? "#000000" : "#ffffff" },
              ]}
            >
              Today
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.notifBtnActive,
              {
                backgroundColor: telemState.lastWeekF ? "#ffffff" : "#3ab913",
              },
            ]}
            onPress={() => setActive("lastWeekF")}
          >
            <Text
              style={[
                { fontWeight: "bold" },
                { color: telemState.lastWeekF ? "#000000" : "#ffffff" },
              ]}
            >
              Last Week
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.notifBtnActive,
              {
                backgroundColor: telemState.lastMonthf ? "#ffffff" : "#3ab913",
              },
            ]}
            onPress={() => setActive("lastMonthf")}
          >
            <Text
              style={[
                { fontWeight: "bold" },
                { color: telemState.lastMonthf ? "#000000" : "#ffffff" },
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
