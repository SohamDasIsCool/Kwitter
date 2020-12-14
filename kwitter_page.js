//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDbzxlFa2oZfYVaZuoPvjTcWkyOopW_TNw",
    authDomain: "kwitter-d934f.firebaseapp.com",
    databaseURL: "https://kwitter-d934f.firebaseio.com",
    projectId: "kwitter-d934f",
    storageBucket: "kwitter-d934f.appspot.com",
    messagingSenderId: "498770365320",
    appId: "1:498770365320:web:d2422786c538d6e91b883d"
  };
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();