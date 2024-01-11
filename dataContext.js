import React,{createContext} from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase-config';


/**
 * Subscribes to a nested Firestore subcollection and provides real-time updates.
 * @param {string} taskId The ID of the 'task' document.
 * @param {Function} onDataChanged Callback function that receives the new data.
 * @return {Function} Unsubscribe function to stop listening to updates.
 */
export const subscribeToNestedCollection = (onDataChanged) => {
    const collectionRef = collection(db, 'data', 'task' ,'tbl_task');
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const newData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      onDataChanged(newData); 
    }, (error) => {
      console.error("Error fetching collection data:", error);
    });
    return unsubscribe;
  };

