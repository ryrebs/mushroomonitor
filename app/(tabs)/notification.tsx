import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import {
  getFirestore,
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
  getDoc,
  doc,
  getDocs,
} from "firebase/firestore";

import { IndexContext } from "../context";
import { fsApp } from "../_layout";

const db = getFirestore(fsApp);
const notifRef = collection(db, "notification");

const dayinminutes = 86400;
const weekinminutes = 604800;
const monthinminutes = 2592000;

export default () => {
  const now = new Date();
  const [notifs, setNotifs] = useState([]);
  const { telemState } = useContext(IndexContext);
  const [filled, setFilled] = useState(false);

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
        return deltasec >= weekinminutes && deltasec < monthinminutes;
      });
    }
    if (telemState.lastMonthF) {
      return notifs_.filter((ntf: any) => {
        const deltasec = (now.getTime() - ntf.timestamp) / 1000;
        return deltasec >= monthinminutes;
      });
    }
  };

  // Get initial data
  useEffect(() => {
    const getData = async () => {
      const q = query(notifRef, orderBy("timestamp", "asc"), limit(5));
      const snap = await getDocs(q);
      let notifs_: any = [];
      snap.forEach((d) => {
        notifs_.push({
          content: d.data().content,
          timestamp: d.data().timestamp,
        });
      });
      notifs_ = filternNotifs(notifs_);
      setNotifs(notifs_);
    };
    getData();
    setFilled(true);
  }, [telemState.todayF, telemState.lastWeekF, telemState.lastMonthF]);

  // listen to changes
  useEffect(() => {
    const getData = async () => {
      onSnapshot(notifRef, (snapshot) => {
        snapshot.docChanges().forEach((change: any) => {
          let notifs_: any = [];
          if (change.type === "added") {
            const { timestamp, content } = change.doc.data();
            notifs_.push({
              content: content,
              timestamp: timestamp,
            });
            notifs_ = filternNotifs(notifs_);
            setNotifs((prev) => {
              return [...prev, ...notifs_];
            });
          }
        });
      });
    };
    if (filled) {
      getData();
      setFilled(false);
    }
  }, [filled]);

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
