import Vue from 'vue'
import App from './App.vue'

import firebase from 'firebase/app'
import 'firebase/messaging'

const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyAVWakzeVsNKKoa8dGjew4VTYAoUHa-CCQ",
    authDomain: "unclear-chat.firebaseapp.com",
    databaseURL: "https://unclear-chat.firebaseio.com",
    projectId: "unclear-chat",
    storageBucket: "unclear-chat.appspot.com",
    messagingSenderId: "1079334651410",
    appId: "1:1079334651410:web:779ee310e520d85ffefacb",
    measurementId: "G-0BETFG7XSJ"
  })
}

initializeFirebase()
firebase.messaging().usePublicVapidKey("BFRVV8WMuZDrOMhCRsF9f8fGoznoSs9cHKqkNXetudq8vyzwsk-wwpV1U_MNvMNsBisSj8AxCYpzIXZzKLTBuVc")
navigator.serviceWorker.register('./sw.js').then(resgistration => {
  firebase.messaging().useServiceWorker(resgistration)
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
