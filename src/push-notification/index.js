import firebase from 'firebase'
export const askForPermissioToReceiveNotifications = () => {
  const messaging = firebase.messaging()
  messaging.requestPermission().then(() => {
    messaging.getToken().then(token => {
      if (token) {
        localStorage.setItem('notif_token', token)
      }
    })
  })
}