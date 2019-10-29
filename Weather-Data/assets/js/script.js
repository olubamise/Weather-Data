
	var url = "http://api.openweathermap.org/data/2.5/weather?q=Abuja&appid=b535a8138ddf05516246c282e81ebfd2";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
  	if (this.readyState == 4 && this.status == 200) {
	    	var myObj = JSON.parse(this.responseText);
	    	document.getElementById("Weather").innerHTML = myObj.name;
	  	}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
