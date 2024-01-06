import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Task from "./Task";
import { subscribeToNestedCollection } from "../../dataContext";

interface TaskItem {
    id: string;
    task: string;
}

const List = () => {
    const [tasks, setTasks] = useState<TaskItem[]>([]);

    useEffect(() => {
        // Set up the subscription
        const unsubscribe = subscribeToNestedCollection((newData: TaskItem[]) => {
            setTasks(newData); // Update the component state with the new data
        });

        // Unsubscribe when the component unmounts
        return () => unsubscribe();
    }, []);

    return (
        <View>
            {tasks.map((item,index) => (
                <Task index={item.id} key={item.id} text={item.task} />
            ))}
        </View>
    );
};

export default List;
