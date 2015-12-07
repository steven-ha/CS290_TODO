function addRow(){
    var req = new XMLHttpRequest();
	
	var addName = document.getElementById("name").value;
    var addReps = document.getElementById("reps").value;
	var addWeight = document.getElementById("weight").value;
    var addDate = document.getElementById("date").value;
    var addLbs = document.getElementById("lbs").value;

	req.open("GET", "http://52.10.69.111:3000/insert?name=" + addName + "&reps=" + addReps + "&weight=" + addWeight + "&date=" + addDate + "&lbs=" + addLbs, true);
	req.setRequestHeader("Content-type", "application/json");
	req.addEventListener("load", function(){
		console.log("done: ", req.status);
		});
	req.send(null);	

}

document.getElementById("submitData").addEventListener("click", insert);

