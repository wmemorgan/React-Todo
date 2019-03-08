import Firebase from 'firebase'
import config from './config'

const firebase = Firebase.initializeApp(config)

const auth = Firebase.auth()

export {
  firebase,
  auth
}