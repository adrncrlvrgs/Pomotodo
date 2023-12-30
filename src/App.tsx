import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme, Text, Button } from "@rneui/themed";
import { theme } from "../styles/ThemeStyles";

interface AppProps {
  toggleTheme: () => void;
}
const App: React.FC<AppProps> = ({toggleTheme}) =>{
  const { theme } = useTheme();
    return(
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View style={[styles.tasksWrapper,]}>
          <Text style={[styles.text]}>Welcome to the App!</Text>
          <Button title="Dark Mode" onPress={toggleTheme}/>
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