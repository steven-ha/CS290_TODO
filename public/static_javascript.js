function addRow(){
    var req = new XMLHttpRequest();
	
	var addName = steven;//document.getElementById("name").value;
    var addReps = 3;//document.getElementById("reps").value;
	var addWeight = document.getElementById("weight").value;
    var addDate = document.getElementById("date").value;
    var addLbs = document.getElementById("lbs").value;
// + "&weight=" + addWeight + "&date=" + addDate + "&lbs=" + addLbs
	
	req.open("GET", "http://52.10.69.111:3000/insert?name=" + addName + "&reps=" + addReps, true);
	req.setRequestHeader("Content-type", "application/json");
	req.addEventListener("load", function(){
		console.log("Row Insert into Table");
	});
	req.send(null);	
}

document.getElementById("submitData").addEventListener("click", addRow);
