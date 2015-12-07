document.addEventListener('DOMContentLoaded', addWorkout());

function addWorkout(){
	document.getElementById('weatherSubmit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		
		if (document.getElementById('option1').checked){
			req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + document.getElementById('zipCode').value + ",us&units=imperial&appid=" + apiKey, true);
		}
		else if (document.getElementById('option2').checked){
			req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + document.getElementById('cityName').value + "&units=imperial&appid=" + apiKey, true);
		}
		
		req.send(null);
		req.addEventListener('load',function(){
		  if(req.status >= 200 && req.status < 400){
			var response = JSON.parse(req.responseText);
			console.log('Response Status: ' + response.cod);
				if(response.cod >= 200 && response.cod < 400){
				console.log(response);
				document.getElementById('wLocation').textContent = response.name;
				document.getElementById('coordinate').textContent = 'Latitude: ' + response.coord.lat + ', Longitude: ' + response.coord.lon;
				document.getElementById('description').textContent = response.weather[0].description;
				document.getElementById('temperature').textContent = response.main.temp + ' degrees F';
				document.getElementById('wind').textContent = response.wind.speed + ' mph';
				document.getElementById('barometer').textContent = response.main.pressure + ' hPa';
				document.getElementById('humidity').textContent = response.main.humidity + '%';
				var owmImage = 'http://openweathermap.org/img/w/' + response.weather[0].icon + '.png';
				document.getElementById('wImage').src = owmImage;
			  }
			  else{
				if (document.getElementById('option1').checked){
					console.log("Invalid zip code.");
					alert("The zipcode is invalid.");
				}
				else if (document.getElementById('option2').checked){
					console.log("Invalid city name.");
					alert("The city name is invalid.");
				}

			  }
		  } else {
			console.log("Error in network request: " + request.statusText);
		  }});
		event.preventDefault();
	})
}