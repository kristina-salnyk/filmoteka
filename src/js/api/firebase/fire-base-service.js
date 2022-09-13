import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FIREBASE_CONFIGS } from '../../constants';

const app = initializeApp(FIREBASE_CONFIGS);
export const db = getFirestore(app);
export const auth = getAuth(app);
