
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

user_n = localStorage.getItem("user_name");
  document.getElementById("user_names").innerHTML = "Welcome "+user_n+"!";

  function add_room() {
    Room_n = document.getElementById("room_name").value;
    firebase.database().ref("/").child(Room_n).update({purpose : "adding room name"});
    localStorage.setItem("room_name" , Room_n);
    window.location.replace("LC_pg.html");
  }

function getData() {
  firebase.database().ref("/").on('value', function(snapshot)
   {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      //sconsole.log("Room name - " +Room_n);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect(name) {
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location.replace("LC_pg.html");
}