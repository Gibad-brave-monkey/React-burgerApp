import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAwp6Z9yFMNZKrJ9IsR4eZXfqFQK1gYrRU",
    authDomain: "very-hot-burgers-17151.firebaseapp.com",
    projectId: "very-hot-burgers-17151",
    storageBucket: "very-hot-burgers-17151.appspot.com",
});


const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;