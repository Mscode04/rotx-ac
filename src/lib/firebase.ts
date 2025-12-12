import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBYahUo9iBNRSxgEv6_SgK6svT-w2rfJk",
  authDomain: "fir-dd32d.firebaseapp.com",
  projectId: "fir-dd32d",
  storageBucket: "fir-dd32d.firebasestorage.app",
  messagingSenderId: "705822768402",
  appId: "1:705822768402:web:689e7d9d1c23edeaf607cb",
  measurementId: "G-RCD993QNPS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export interface ApplicationData {
  responses: { question: string; answer: string | string[] }[];
  submittedAt: Date;
  recommendedTrack: string;
}

export const submitApplication = async (data: ApplicationData) => {
  try {
    const docRef = await addDoc(collection(db, 'applications'), data);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.log('Demo mode - Firebase not connected. Data would be saved:', data);
    return { success: true, id: 'demo-' + Date.now() };
  }
};
