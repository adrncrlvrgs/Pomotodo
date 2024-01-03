import React,{useState, useEffect} from 'react';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';

export const subscribeToCollection = () => {
  return onSnapshot(collection(db, 'task'), (snapshot) => {
    const dataList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(dataList);
  });
};
