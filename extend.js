"https://www.gstatic.com/firebasejs/5.8.6/firebase.js"
var config = {
  apiKey: "AIzaSyCtuXy5zGJ1QLg1fNt3NlDBQcWugufCn10",
    authDomain: "test-project-27d06.firebaseapp.com",
    databaseURL: "https://test-project-27d06.firebaseio.com",
    projectId: "test-project-27d06",

    storageBucket: "test-project-27d06.appspot.com",
    messagingSenderId: "481708085762"
};

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to the recommendations object in your Firebase database
var Interviewees = firebase.database().ref("Interviewees");
var uid = Interviewees.push().key;

// Save a new recommendation to the database, using the input in the form
var submitrec = function (data) {

  // Get input values from each of the form elements
  var Name = $("#IName").val();
  var Schedule=  $("#ISchedule").val();
  var Score=   $("#IScore").val();
  var Recommendation=  $("#IRecommendation").val();
  var Comment=   $("#IComment").val();
  var userid= uid;
  // Push a new recommendation to the database using those values
  console.log(Interviewees.push({"Name": Name,
                                 "Schedule": Schedule,
                                "Score": Score,
                                "Recommendation": Recommendation,
                                "Comment": Comment,
								"ID":userid
}));
};
     Interviewees.on('value', function(childSnapshot) {
		// Get the recommendation data from the most recent snapshot of data
		// added to the recommendations list in Firebase
		tr=[];
		childSnapshot.forEach(function (data){
			console.log(data.val());
			var d = data.val();
			var k=data.key;
			tr.push(`<tr>
			<td id="${k}_name">${d['Name']}</td>
			<td id="${k}_schedule">${d['Schedule']}</td>
			<td id="${k}_score">${d['Score']}</td>
			<td id="${k}_recommend">${d['Recommendation']}</td>
			<td id="${k}_comment">${d['Comment']}</td>
			<td>${k}</td>
            <td><button onclick="delete_user('${k}');">Delete</button></td>
			<td><button onclick="update_user('${k}');">Update</button></td>
			</tr>
			`);

		});

		console.log(tr);
		$("#tb_applicants").html(tr.join());

 
});
 function delete_user(k){
           
  
 Interviewees.child(k).remove();
		   alert('The user is deleted successfully!');
		  reload_page();
}

function update_data() {

var Name = $("#IName").val();
  var Schedule=  $("#ISchedule").val();
  var Score=   $("#IScore").val();
  var Recommendation=  $("#IRecommendation").val();
  var Comment=   $("#IComment").val();
  //var userid= uid;
	        
 
  console.log(Interviewees.child(k).set({"Name": Name,
                                 "Schedule": Schedule,
                                "Score": Score,
                                "Recommendation": Recommendation,
                                "Comment": Comment

    }));
};
 function update_user(k){

$("#IName").val($("#" + k +"_name").html());
$("#ISchedule").val($("#" + k +"_schedule").html());
$("#IScore").val($("#" + k +"_score").html());
$("#IRecommendation").val($("#" + k +"_recommend").html());
$("#IComment").val($("#" + k +"_comment").html());
$("#IKey").val(k);
console.log(k);

	

			/*var personRef = firebase.database().ref("Interviewees");

            personRef.once('value', function (snapshot) {

                if (snapshot.val() === null) {
                  //  does not exist 
                    alert('does not exist');
                } else {
                    personRef.update(submitrec);
                }

            });*/
     /*Interviewees.once("child_changed", function(snapshot) {
  var changedPost = snapshot.val();
  console.log("The updated record is " + changedPost.submitrec);

});*/
};



 function reload_page(){
   window.location.reload();
  }

$(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#NameForm").submit(submitrec);

});



   
