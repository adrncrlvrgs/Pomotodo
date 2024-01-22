import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase-config';

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

