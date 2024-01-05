import React,{createContext} from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase-config'; // Adjust this import based on your file structure


/**
 * Subscribes to a nested Firestore subcollection and provides real-time updates.
 * @param {string} taskId The ID of the 'task' document.
 * @param {Function} onDataChanged Callback function that receives the new data.
 * @return {Function} Unsubscribe function to stop listening to updates.
 */
export const subscribeToNestedCollection = (onDataChanged) => {
    // Adjust the path to point to the 'tbl_task' subcollection of the specific 'task' document
    const collectionRef = collection(db, 'data', 'task' ,'tbl_task');
  
    // Subscribe to the collection
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const newData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      onDataChanged(newData); // Call the callback function with the new data
      console.log(newData);
    }, (error) => {
      // Handle errors here, such as logging them
      console.error("Error fetching collection data:", error);
    });
  
    // Return the unsubscribe function
    return unsubscribe;
  };

