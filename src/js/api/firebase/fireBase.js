import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import {
  getDoc,
  doc,
  setDoc,
  getFirestore,
  collection,
} from 'firebase/firestore';
import notifications from '../../notifications';
import { FIRE_BASE_MESSAGES } from '../../constants';
import localStorageKeys from '../../local-storage/local-storage-keys';
import { watchedTabClickHandler } from '../../handlers/watchedTabClickHandler';

const firebaseConfig = {
  apiKey: 'AIzaSyASac4aw0X2wCy6bkMcU6NA4fFTe0NTD7w',
  authDomain: 'film-27a94.firebaseapp.com',
  databaseURL: 'https://film-27a94-default-rtdb.firebaseio.com',
  projectId: 'film-27a94',
  storageBucket: 'film-27a94.appspot.com',
  messagingSenderId: '56123334425',
  appId: '1:56123334425:web:349d0e439f19e0f99def88',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

function createUser({ email, password }) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const options = {
        email,
        password,
        newUser: true,
      };
      singUser(options);
    })
    .catch(error => {
      if (error.message.includes(FIRE_BASE_MESSAGES.REGISTERED_USER)) {
        const options = {
          email,
          password,
          newUser: false,
        };
        singUser(options);
      }
    });
}

export function submitRegisterForm(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  createUser({
    email: email.value,
    password: password.value,
  });

  e.currentTarget.reset();
}

function singUser({ email, password, newUser }) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      notifications.showCustomMessage('You are signed in!');
      if (newUser) {
        initStorage();
      }
    })
    .catch(error => {
      notifications.showCustomMessage('Login is failed. Try again later.');
    });
}

async function initStorage() {
  try {
    let usersFilmsObj = {
      [localStorageKeys.WATCHED_MOVIES]: [],
      [localStorageKeys.QUEUE_MOVIES]: [],
    };
    const userData = doc(db, 'users', auth.currentUser.uid);
    await setDoc(userData, usersFilmsObj, { merge: true });
    notifications.showCustomMessage('You database storage ready to use.');
  } catch (error) {
    notifications.showCustomMessage(
      'Initialization of database storage was failed.'
    );
  }
}

export async function getDataFromStorage(key) {
  try {
    const userData = doc(db, 'users', auth.currentUser.uid);
    const docSnap = await getDoc(userData);
    if (docSnap.exists()) {
      const usersFilmsObj = docSnap.data();
      return usersFilmsObj[key];
    } else {
      notifications.showCustomMessage(
        'Failed to load movies from database storage.'
      );
    }
  } catch (error) {
    notifications.showCustomMessage(
      'Failed to load movies from database storage.'
    );
  }
}
