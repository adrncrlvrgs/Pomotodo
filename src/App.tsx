import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme, Text, Button } from "@rneui/themed";
import {List, AddTask }from "./components/index";

type AppProps = {
  toggleTheme: () => void
}

const App = (props: AppProps) => {
  const { theme } = useTheme();
    return(
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={[styles.tasksWrapper]}>
          <View style={styles.header}>
            <Text style={[styles.text]}>Today's Task</Text>
            <Button title="Dark Mode" onPress={props.toggleTheme}/>
          </View>
          <List/>
        </View>
        <AddTask/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: "row",
  }
  
});

  

export default App 