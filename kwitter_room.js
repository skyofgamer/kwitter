
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {

      apiKey: "AIzaSyC_XCNo5DTHtoocglHkT8IZ5r8l8Ls7D00",
    
      authDomain: "kwitter-6cf8e.firebaseapp.com",
    
      databaseURL: "https://kwitter-6cf8e-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-6cf8e",
    
      storageBucket: "kwitter-6cf8e.appspot.com",
    
      messagingSenderId: "196481846409",
    
      appId: "1:196481846409:web:84aa41264c3a7e09470a58"
    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!"
    function addroom(){
      Room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(Room_name).update({
            purpose:"addingRoom"
      })
      localStorage.setItem("room_name",Room_name)
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_names :" + Room_names);
row = "<div class='room_name' id='"+Room_names+"' onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location = "index.html"
}