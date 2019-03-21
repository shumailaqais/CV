
var config = {
  apiKey: "AIzaSyCtuXy5zGJ1QLg1fNt3NlDBQcWugufCn10",
    authDomain: "test-project-27d06.firebaseapp.com",
    databaseURL: "https://test-project-27d06.firebaseio.com",
    projectId: "test-project-27d06",
    storageBucket: "test-project-27d06.appspot.com",
    messagingSenderId: "481708085762"
};


firebase.initializeApp(config);
var myFirebase = firebase.database().ref();
console.log(myFirebase);

var r = myFirebase.child("r");
console.log(r.push("abcs"))

  


//recommendations.push({
    
   // "this would be telling about the recommendation of the interviewees"
//});
