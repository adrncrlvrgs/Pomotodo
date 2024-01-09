import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme, Text } from "@rneui/themed";
import DeleteTask from "./DeleteTask";

type Props = {
  text: string;
  index: string;
};

const Task = (props: Props) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.item, { backgroundColor: theme.colors.secondary }]}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={[styles.itemText]}>{props.text}</Text>
      </View>
      <DeleteTask props={props.index.toString()} style={styles.circular} />
    </View>
  );
};

const styles = StyleSheet.create({
   item: {
      padding: 10,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#ddd', 
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-between",
      marginBottom: 20,
      opacity: 0.8
   },
   itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
   },
   square: {
      width: 24,
      height: 24,
      backgroundColor: "#55bcf6",
      borderRadius: 5,
      opacity: 0.4,
      marginRight: 15
   },
   itemText: {
      maxWidth: '80%'
   },
  circular: {
      width: 15,
      height: 15,
      borderColor: "#55bcf6",
      borderWidth: 2,
      borderRadius: 10
  }
});

export default Task;
