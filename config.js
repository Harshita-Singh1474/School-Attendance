import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCBiwvQDEnMKiSHdQdoVrJT6OWr6uL2jes",
    authDomain: "school-attendance-app-16232.firebaseapp.com",
    databaseURL: "https://school-attendance-app-16232-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-16232",
    storageBucket: "school-attendance-app-16232.appspot.com",
    messagingSenderId: "783179867227",
    appId: "1:783179867227:web:04e582bb6e5b2b1d114b7e"
};

if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database()

    