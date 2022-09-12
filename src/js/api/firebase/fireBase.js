import { initializeApp } from 'firebase/app';
import { getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,} from 'firebase/auth'
import { getDoc,
  doc,
  setDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyASac4aw0X2wCy6bkMcU6NA4fFTe0NTD7w",
  authDomain: "film-27a94.firebaseapp.com",
  databaseURL: "https://film-27a94-default-rtdb.firebaseio.com",
  projectId: "film-27a94",
  storageBucket: "film-27a94.appspot.com",
  messagingSenderId: "56123334425",
  appId: "1:56123334425:web:349d0e439f19e0f99def88"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// const register = document.getElementById('register_form')
// const login = document.getElementById('login_form')

// login.addEventListener('submit', submitLoginForm)


function createUser({ email, password }) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

export function submitRegisterForm(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements
  console.log(email)
  createUser({
    email: email.value,
    password: password.value
  });
  e.currentTarget.reset();
}

function singUser({ email, password }) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      post_db();
      const user = userCredential.user;
      
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export function submitLoginForm(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements
  singUser({
    email: email.value,
      password: password.value
  })
 e.currentTarget.reset();
}


// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
function changedUser() {

}

 
signOut(auth).then(() => {

}).catch((error) => {
  
});

async function post_db() {
    try {
        let usersFilmsObj = {
            watch: '[]',
            queqe:'[]'
        }
        console.log(auth.currentUser)
         const userData = doc(db, 'users', auth.currentUser.uid);

        await setDoc(userData, usersFilmsObj, { merge: true });
        
} catch (e) {
  console.error("Error adding document: ", e);
}
}

//   getData().then(e => {
//         localStorage.dataFromDB = JSON.stringify(e)
//       })