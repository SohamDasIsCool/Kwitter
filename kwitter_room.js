
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
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
