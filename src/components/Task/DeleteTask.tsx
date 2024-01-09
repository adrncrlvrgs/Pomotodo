import React from "react";
import { TouchableOpacity,View } from "react-native";
import { db } from "../../../firebase-config";
import { doc, deleteDoc } from "firebase/firestore";

const DeleteTask = ({props,style}:{props : string , style : any}) =>{

    const completeTask = async(key: any) => {
        console.log(key)
        try {
            await deleteDoc(
                doc(
                    db,
                    'data',
                    'task',
                    'tbl_task',
                    key 
                )
            )

        } catch (error) {
            console.error("Error deleting document: ", error);

        }
    }
    
    return(
        <TouchableOpacity key={props} onPress={() => completeTask(props)}>
            <View key={props.toString()} style={style}></View>
        </TouchableOpacity>
    )

}

export default DeleteTask