import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const fireBaseConfigs = {
  // apiKey: 'AIzaSyASac4aw0X2wCy6bkMcU6NA4fFTe0NTD7w',
  // authDomain: 'film-27a94.firebaseapp.com',
  // databaseURL: 'https://film-27a94-default-rtdb.firebaseio.com',
  // projectId: 'film-27a94',
  // storageBucket: 'film-27a94.appspot.com',
  // messagingSenderId: '56123334425',
  // appId: '1:56123334425:web:349d0e439f19e0f99def88',
  apiKey: 'AIzaSyBJkxMDtTqYrdFtSUQ8p4D5vM8QPe0wWVY',
  authDomain: 'filmoteka-c1773.firebaseapp.com',
  databaseURL: 'https://filmoteka-c1773-default-rtdb.firebaseio.com',
  projectId: 'filmoteka-c1773',
  storageBucket: 'filmoteka-c1773.appspot.com',
  messagingSenderId: '634394496431',
  appId: '1:634394496431:web:a9a577cbb369e6c063335a',
  measurementId: 'G-613VXXTFK2',
};

const app = initializeApp(fireBaseConfigs);
export const db = getFirestore(app);
export const auth = getAuth(app);
