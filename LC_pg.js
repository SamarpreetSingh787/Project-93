//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBT7W8NaGJHuT0KognpXNiKJAbcNGyftp8",
      authDomain: "project-93-c12f5.firebaseapp.com",
      databaseURL: "https://project-93-c12f5-default-rtdb.firebaseio.com",
      projectId: "project-93-c12f5",
      storageBucket: "project-93-c12f5.appspot.com",
      messagingSenderId: "644940079697",
      appId: "1:644940079697:web:1984c54febc92768174e70"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_n=localStorage.getItem("user_name");
    room_n=localStorage.getItem("room_name");

function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_n,
            msg:msg,
            like:0
      })
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}