/** The function gets weather data for the next 15 hours and stores it in an array
*/
function updateWeather() {
    axios.post('http://localhost:80/weather', {
        sessionId: Cookies.get("sessionID")
    })
    .then ((response) => {
        //Change the number of responses displayed here
        var numResponses = 8;
        var resp = response['data']['list'];
        const cityLocation = response['data']['city'];
        const cityName = cityLocation.name;
        console.log(cityName);
        document.getElementById('title').innerHTML += cityName;
        console.log(response);
        var i;
        var weatherArr = [];
        for (i = 0; i<numResponses; i++) {
            var currentTemp = (resp[i]['main']['temp']-273.15).toPrecision(3);
            var currentTime = new Date(resp[i]["dt"]*1000);
            var weatherCondition = resp[i]['weather'][0]['id'];
            var weatherTextCondition = resp[i]['weather'][0]['description'];
            weatherArr.push([currentTime, currentTemp, weatherCondition]);

            let textBoxName = "textbox" + i;
            document.getElementById(textBoxName).innerHTML = currentTime;
            document.getElementById(textBoxName).appendChild(document.createElement("br"));
            document.getElementById(textBoxName).appendChild(document.createElement("br"));
            document.getElementById(textBoxName).innerHTML += currentTemp + " degrees Celsius";
            document.getElementById(textBoxName).appendChild(document.createElement("br"));
            document.getElementById(textBoxName).innerHTML += weatherTextCondition;
            document.getElementById(textBoxName).appendChild(document.createElement("br"));
            document.getElementById(textBoxName).appendChild(document.createElement("br"));
        }
        console.log(weatherArr);
        recommendWeather(weatherArr);

    }, (error) => {
        console.log(Cookies.get("sessionID"));
        console.log(error);
        let myValues = "There was an error finding your city. Please update it.";
        localStorage.setItem('profileResult', myValues);
        window.location.assign("./profile.html");
    })
}
function recommendWeather(weatherArray) {
    console.log(weatherArray);
    var i;
    console.log(weatherArray.length);
    let currentTime;
    var isWalk = false;
    var minTemp = 15;
    var maxTemp = 30;
    var bestTemp = 100;
    var bestIndex;
    for (i = 0; i<weatherArray.length ; i++)
    {
        var currentElement = weatherArray[i];
        currentTime = currentElement[0];
        currentTime = currentTime.toLocaleTimeString('en-US');

        let imageName = "Image" + i;
        document.getElementById(imageName).src = weatherIcon(currentElement[2]);

        //Checks for temp and makes sure there are no adverse weather conditions
        if ((currentElement[1] >= minTemp && currentElement[1] <= maxTemp) && (currentElement[2]<=804 && currentElement[2]>=800))
        {
            
            let textBoxName = "textbox" + i;
            document.getElementById(textBoxName).innerHTML += "Good Time to Walk";
            document.getElementById(imageName).style.filter = "brightness(100%)";

            isWalk = true;
            
            document.getElementById("recommendedTime").innerHTML += currentTime;
            document.getElementById("recommendedTime").innerHTML += "    ";
        }
        if (Math.abs(currentElement[1]-minTemp)<bestTemp)
        {
            bestIndex = i;
            bestTemp = Math.abs(currentElement[1]-minTemp);
        }
        if (Math.abs(currentElement[1]-maxTemp)<bestTemp)
        {
            bestIndex = i;
            bestTemp = Math.abs(currentElement[1]-maxTemp);
        }
    }
    if(!isWalk)
    {
        if (weatherArray[bestIndex][1]<minTemp)
        {
            textBoxName = "textbox" + bestIndex;
            imageName = "Image" + bestIndex;
            document.getElementById(textBoxName).innerHTML += "Cold, but still the best time to walk today";
            document.getElementById(imageName).style.filter = "brightness(100%)";

            var currentElement = weatherArray[bestIndex];
            currentTime = currentElement[0];
            currentTime = currentTime.toLocaleTimeString('en-US');
            
            document.getElementById("recommendedTime").innerHTML = currentTime;
        }
        if(weatherArray[bestIndex][1]>maxTemp)
        {

            textBoxName = "textbox" + bestIndex;
            imageName = "Image" + bestIndex;
            document.getElementById(textBoxName).innerHTML += "Hot, but still the best time to walk today";
            document.getElementById(imageName).style.filter = "brightness(100%)";

            var currentElement = weatherArray[bestIndex];
            currentTime = currentElement[0];
            currentTime = currentTime.toLocaleTimeString('en-US');
            
            document.getElementById("recommendedTime").innerHTML = currentTime;
        }

    }
}

function weatherIcon(n) {
    if (n>= 200 && n<= 232) return "./images/thunderstorm.jpeg";
    else if (n >= 300 && n<= 531) return "./images/rain.jpeg";
    else if (n >= 600 && n <= 622) return "./images/snow.jpeg";
    else if (n >= 701 && n <= 781) return "./images/lowvisibility.jpeg";
    else if (n == 800) return "./images/clearsky.jpeg";
    else if (n >= 801 && n <= 804) return "./images/cloudy.jpeg";
}

function initMap() {
  // The location
    axios.post('http://localhost:80/weather', {
        sessionId: Cookies.get("sessionID")
    })
    .then ((response) => { 
        var cityLat = response.data.city.coord.lat;
        var cityLon = response.data.city.coord.lon;
        const location = {lat: cityLat, lng: cityLon };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 14,
          center: location,
        });
    }, (error) => {
        console.log(Cookies.get("sessionID"));
        console.log(error);
    })

}

updateWeather();
