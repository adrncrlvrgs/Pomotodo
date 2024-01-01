import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme, Text, Button } from "@rneui/themed";
import Task from "./components/Task";

type AppProps = {
  toggleTheme: () => void
}

const App = (props: AppProps) => {
  const { theme } = useTheme();
    return(
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={[styles.tasksWrapper,]}>
          <Text style={[styles.text]}>Today's Task</Text>
          <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>
          <Button title="Dark Mode" onPress={props.toggleTheme}/>
        </View>
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
});

  

export default App 