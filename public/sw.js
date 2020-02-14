importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAVWakzeVsNKKoa8dGjew4VTYAoUHa-CCQ",
    authDomain: "unclear-chat.firebaseapp.com",
    databaseURL: "https://unclear-chat.firebaseio.com",
    projectId: "unclear-chat",
    storageBucket: "unclear-chat.appspot.com",
    messagingSenderId: "1079334651410",
    appId: "1:1079334651410:web:779ee310e520d85ffefacb",
    measurementId: "G-0BETFG7XSJ"
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
    console.log(payload)
})
