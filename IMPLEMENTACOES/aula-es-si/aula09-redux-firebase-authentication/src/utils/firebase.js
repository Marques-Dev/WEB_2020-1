import firebase from 'firebase/app'
import 'firebase/auth'
//import 'firebase/database'

import firebase_key from '../keys/firebase'
firebase.initializeApp(firebase_key)  

export default firebase

