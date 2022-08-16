import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { ref, onValue } from "firebase/database";
import { db } from "./components/config";

export default function App() {
  const [nhietdo, setnhietdo] = useState([]);
  const [doam, setdoam] = useState([]);
  useEffect(() => {
    const starCountRef = ref(db, "test/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setnhietdo(data.nhietdo);
      console.log(data.nhietdo);
    });
  }, [nhietdo]);

  useEffect(() => {
    const starCountRef = ref(db, "test/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setdoam(data.doam);
      console.log(data.doam);
    });
  }, [doam]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 25, color: "black" }}>
          {" "}
          🌡 NHIET DO VA DO AM 💦{" "}
        </Text>
      </View>
      <ImageBackground
        source={require("test1/components/4k-mobile-3-scaled.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container1}>
          <View style={styles.box}>
            <View style={styles.inner}>
              <Text style={{ fontSize: 25, color: "#ff4500" }}>Nhiet Do🌡</Text>
              <Text style={{ fontSize: 22, color: "black" }}>{nhietdo} </Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.inner}>
              <Text style={{ fontSize: 25, color: "#1e90ff" }}>Do Am 💦</Text>
              <Text style={{ fontSize: 22, color: "black" }}>{doam} %</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#faf0e6",
  },
  container1: {
    width: "100%",
    height: "85%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "50%",
    height: "45%",
    padding: 6,
  },
  inner: {
    flex: 1,
    backgroundColor: "#fffafa",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderRadius: 15,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
