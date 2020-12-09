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
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    
    function addRoom() {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose
      :"Adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}