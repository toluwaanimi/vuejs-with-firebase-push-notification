<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="askPermision">ask permision</button>
    <button @click="sendNotif">send notif</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
import { askForPermissioToReceiveNotifications } from './push-notification'
export default {
  name: 'App',
  components: {
  },
  created () {
    console.log('created')
    firebase.messaging().onMessage((payload) => {
      console.log('payload', payload)
    })
  },
  methods: {
    askPermision () {
      askForPermissioToReceiveNotifications()
    },
    sendNotif () {
      axios.post('https://fcm.googleapis.com/fcm/send', {
        notification: {
          title: "Firebase",
          body: "Firebase is awesomeaaaaaaaa"
        },
          to: localStorage.getItem('notif_token')
      }, {
        headers: {
          'Authorization': 'key=AAAA-01bxhI:APA91bF7w48BYkbq4syw91OBIxEPuidDFBjSaiVR1FmQB59U5snoYL9XxZR0U95pnPg_72jmMrslSALxZV3440b4YpUcy3bjeeyDXsyGh8MH5zldgkfJIjzMFDBLlF-b9ZhDaGHyJzB5'
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
