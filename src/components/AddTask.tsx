import React,{useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform, TextInput, Touchable, TouchableOpacity, Keyboard } from "react-native";
import { useTheme, Text, Button } from "@rneui/themed";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
const AddTask = () => {
    const [task, setTask] = useState('')

    const addTask = async ( ) => {
        try {
            setTask('')
            await addDoc(collection(db, 'data','task','tbl_task'), {
                task: task
            });
            Keyboard.dismiss();

        } catch (e) {
            console.error('Error adding task: ', e);
        }
      };
    
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}
        >
            <TextInput style={styles.input} placeholder="Write task" value={task} onChangeText={e => setTask(e)}></TextInput>

            <TouchableOpacity onPress={() => addTask()}>
                <View style={styles.addWrapper}>
                    <Text>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center'
      },
      input: {
        paddingVertical: 15,
        paddingHorizontal:15,
        backgroundColor: "#fff",
        width: 250,
        borderRadius: 60,
        borderColor: "#c0c0c0",
        borderWidth: 1,
      },
      addWrapper: {
        width: 55,
        height: 55,
        backgroundColor: "#fff",
        borderRadius: 60,
        justifyContent: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        alignItems: "center"
      },
})

export default AddTask