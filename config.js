import firebase from "firebase";

 const firebaseConfig = {
  apiKey: "AIzaSyAIQCVq1TUWer-nN_dd_OgX7h6fEKbmiVI",
  authDomain: "attendence-app-2c730.firebaseapp.com",
  databaseURL: "https://attendence-app-2c730-default-rtdb.firebaseio.com",
  projectId: "attendence-app-2c730",
  storageBucket: "attendence-app-2c730.appspot.com",
  messagingSenderId: "851240452125",
  appId: "1:851240452125:web:2a59d30e904238d305c6f4"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
