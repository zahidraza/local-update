import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import * as Application from "expo-application";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Version {Application.nativeApplicationVersion}</Text>
      <Text>Version 1.0.5</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
