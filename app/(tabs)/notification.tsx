import { useCallback, useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  RefreshControl,
} from "react-native";
import {
  getFirestore,
  collection,
  onSnapshot,
  orderBy,
  query,
  getDocs,
} from "firebase/firestore";

import { IndexContext } from "../context";
import { fsApp } from "../_layout";

const db = getFirestore(fsApp);
const telemRef = collection(db, "sensor_data");

const dayinminutes = 86400;
const weekinminutes = 604800;
const monthinminutes = 2592000;

const addContent = (data: any) => {
  const updateContent: any = [];

  data.forEach((elem) => {
    if (elem.temperature <= 25) {
      updateContent.push({
        timestamp: elem.timestamp,
        content: (
          <Text style={{ textAlign: "justify" }}>
            System has detected that the temperature levels were low at
            <Text style={{ fontWeight: "bold" }}> {elem.temperature} °C </Text>.
            The heat bulb was automatically turned on to regulate temperature."
          </Text>
        ),
      });
    }

    if (elem.humidity <= 90) {
      updateContent.push({
        timestamp: elem.timestamp,
        content: (
          <Text>
            System has detected that the humidity levels were low at
            <Text style={{ fontWeight: "bold" }}> {elem.humidity} %</Text>. The
            mistmaker was automatically turned on to regulate humidity.
          </Text>
        ),
      });
    }
  });

  return updateContent;
};

export default () => {
  const now = new Date();
  const [notifs, setNotifs] = useState([]);
  const { telemState } = useContext(IndexContext);

  const filternNotifs = (notifs_: any) => {
    if (telemState.todayF) {
      return notifs_.filter((ntf) => {
        const deltasec = (now.getTime() - ntf.timestamp) / 1000;
        return deltasec <= dayinminutes;
      });
    }

    if (telemState.lastWeekF) {
      return notifs_.filter((ntf: any) => {
        const deltasec = (now.getTime() - ntf.timestamp) / 1000;
        return deltasec >= weekinminutes && deltasec < weekinminutes * 2;
      });
    }
    if (telemState.lastMonthF) {
      return notifs_.filter((ntf: any) => {
        const deltasec = (now.getTime() - ntf.timestamp) / 1000;
        return deltasec >= monthinminutes;
      });
    }

    return [];
  };

  useEffect(() => {
    let orderDrc = "desc";
    if ((telemState.lastWeekF, telemState.lastMonthF)) orderDrc = "asc";
    const q = query(telemRef, orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      let newNotif: any = [];
      snapshot.docChanges().forEach((change: any) => {
        if (change.type === "added") {
          const { timestamp, temperature, humidity } = change.doc.data();
          newNotif.push({
            id: change.doc.id,
            timestamp,
            temperature,
            humidity,
          });
        }
      });
      const nt = addContent(newNotif);
      setNotifs((prevNotif) => {
        let p = [...prevNotif, ...nt];
        return filternNotifs(p);
      });
    });
  }, [telemState.todayF, telemState.lastWeekF, telemState.lastMonthF]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    const getData = async () => {
      let newNotif: any = [];

      let orderDrc = "desc";
      if ((telemState.lastWeekF, telemState.lastMonthF)) orderDrc = "asc";
      const q = query(telemRef, orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const { timestamp, temperature, humidity } = doc.data();
        newNotif.push({
          id: doc.id,
          timestamp,
          temperature,
          humidity,
        });
      });
      const nt = addContent(newNotif);
      const filtered = filternNotifs(nt);
      setNotifs(filtered);
    };
    getData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {notifs
          .sort((a: any, b: any) => b.timestamp - a.timestamp)
          .map((ntfs, i) => (
            <View
              key={i}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginVertical: 10,
                backgroundColor: "#ffffff",
                borderRadius: 15,
                minWidth: Dimensions.get("screen").width * 0.8,
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
                  {new Date(ntfs.timestamp).toDateString()}
                </Text>
                <Text>{new Date(ntfs.timestamp).toLocaleTimeString()}</Text>
              </View>
              <Text>{ntfs.content}</Text>
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
