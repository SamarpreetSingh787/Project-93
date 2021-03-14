
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBT7W8NaGJHuT0KognpXNiKJAbcNGyftp8",
  authDomain: "project-93-c12f5.firebaseapp.com",
  projectId: "project-93-c12f5",
  storageBucket: "project-93-c12f5.appspot.com",
  messagingSenderId: "644940079697",
  appId: "1:644940079697:web:1984c54febc92768174e70"

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  firebase.initializeApp(firebaseConfig);
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
