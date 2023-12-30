import React from "react";
import { View,Text, StyleSheet } from "react-native";

const App = () =>{
    return(
        <View>
            <Text style={styles.sectionTitle}>This is a task</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: 24,
      fontWeight: "bold"
    },
  });
  

export default App 