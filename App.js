import * as React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import * as Application from "expo-application";

import * as Updates from "expo-updates";

export default function App() {
  const [isUpdateAvailable, setIsUpdateAvailable] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const checkUpdateAsync = async () => {
      try {
        const result = await Updates.checkForUpdateAsync();
        setIsUpdateAvailable(result.isAvailable);
      } catch (error) {
        if (typeof error === "string") {
          setError(error);
        } else {
          setError(JSON.stringify(error));
        }
      }
    };

    checkUpdateAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Version {Application.nativeApplicationVersion}</Text>
      <Text>Version 1.0.16</Text>
      <Text>Update Available = {isUpdateAvailable ? "Yes" : "No"}</Text>
      <Text>Error = {error}</Text>
      <Text>Manifest: {JSON.stringify(Updates.manifest)}</Text>
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
