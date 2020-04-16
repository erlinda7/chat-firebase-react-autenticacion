import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCzrWzsz4GBFHvji1wiJdUTOn-Wi-mI6uE",
    authDomain: "miprimerproyecto-fa3bf.firebaseapp.com",
    databaseURL: "https://miprimerproyecto-fa3bf.firebaseio.com",
    projectId: "miprimerproyecto-fa3bf",
    storageBucket: "miprimerproyecto-fa3bf.appspot.com",
    messagingSenderId: "312821841245",
    appId: "1:312821841245:web:a0a0422bc6d7a1117a3cb4",
    measurementId: "G-3VXJN3Z8FE"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default auth = firebase.auth;
export default db = firebase.database();