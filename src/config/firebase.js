import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBZ43YlGRw_BdCM8FmYHnNgH-F7TFYhF5o",
  authDomain: "wme-react-todo.firebaseapp.com",
  databaseURL: "https://wme-react-todo.firebaseio.com",
  projectId: "wme-react-todo",
  storageBucket: "wme-react-todo.appspot.com",
}

firebase.initializeApp(config)

export default firebase