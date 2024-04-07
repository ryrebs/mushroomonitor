import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
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

const now = new Date();
const db = getFirestore(fsApp);
const notifRef = collection(db, "notification");

export default () => {
  const [notifs, setNotifs] = useState([]);

  const { todayF, lastWeekF, lastMonthF } = useContext(IndexContext);

  const filternNotifs = (notif: any) => {
    if (todayF) {
      return notif.timestamp.getDate() >= now.getDate();
    }
    // TODO
    if (lastWeekF) {
      return true;
    }
    // TODO
    if (lastMonthF) {
      return true;
    }
  };

  // Get initial data
  useEffect(() => {
    const getData = async () => {
      const q = query(notifRef, orderBy("timestamp", "asc"), limit(5));
      const snap = await getDocs(q);
      const notifs_: any = [];
      snap.forEach((d) => {
        notifs_.push({
          content: d.data().content,
          timestamp: new Date(d.data().timestamp),
        });
      });
      notifs_.filter(filternNotifs);
      setNotifs(notifs_);
    };
    getData();
  }, [todayF, lastWeekF, lastMonthF]);

  useEffect(() => {
    const getData = async () => {
      onSnapshot(notifRef, (snapshot) => {
        snapshot.docChanges().forEach((change: any) => {
          const notifs_: any = [];
          if (change.type === "added") {
            const { timestamp, content } = change.doc.data();
            notifs_.push({
              content: content,
              timestamp: new Date(timestamp),
            });
            setNotifs((prev: any) => {
              return [...prev, ...notifs_];
            });
          }
        });
      });
    };
    getData();
  }, []);

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
