import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDwqT1Kg0tMj0Hm2D0zK7UlyuzQwhL0rOM",
  authDomain: "asapp-chat-app.firebaseapp.com",
  databaseURL: "https://asapp-chat-app.firebaseio.com",
  projectId: "asapp-chat-app",
  storageBucket: "asapp-chat-app.appspot.com",
  messagingSenderId: "572490553343",
  appId: "1:572490553343:web:3e68b6efc1b675ca06b9ca",
  measurementId: "G-LVKXR7P3D2"
};

const firebaseApp = firebase.initializeApp(config);

export const auth =firebaseApp.auth();

export default firebaseApp;