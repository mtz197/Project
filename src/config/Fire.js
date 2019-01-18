import firebase from 'firebase';


const config={
    apiKey: "AIzaSyAJlUjyEQvh3wezUqD0giZyyVKKaii9Hp4",
    authDomain: "register-6f492.firebaseapp.com",
    databaseURL: "https://register-6f492.firebaseio.com",
    projectId: "register-6f492",
    storageBucket: "register-6f492.appspot.com",
    messagingSenderId: "246169678298"
  
};
  const fire = firebase.initializeApp(config);
  export default fire;
  
