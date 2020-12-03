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
        console.log(response);
        var i;
        var weatherArr = [];
        for (i = 0; i<numResponses; i++) {
            var currentTemp = (resp[i]['main']['temp']-273.15).toPrecision(3);
            var currentTime = new Date(resp[i]["dt"]*1000);
            var weatherCondition = resp[i]['weather'][0]['id'];
            weatherArr.push([currentTime, currentTemp, weatherCondition]);

            //Add the text to the html element. Change the text/location here
          /*  var newWeatherText = "The weather at " + (currentTime) +" is " + (currentTemp) + " degrees Celsius";
            var newWeatherPh = document.createElement("p").appendChild(document.createTextNode(newWeatherText));
            document.getElementById("weatherlisting").appendChild(newWeatherPh);
            document.getElementById("weatherlisting").appendChild(document.createElement("br")); */

            let textBoxName = "textbox" + i;
            document.getElementById(textBoxName).innerHTML = currentTime;
            document.getElementById(textBoxName).appendChild(document.createElement("br"));
            document.getElementById(textBoxName).appendChild(document.createElement("br"));
            document.getElementById(textBoxName).innerHTML += currentTemp + " degrees Celsius";
            document.getElementById(textBoxName).appendChild(document.createElement("br"));
            document.getElementById(textBoxName).appendChild(document.createElement("br"));
        }
        console.log(weatherArr);
        recommendWeather(weatherArr);

    }, (error) => {
        console.log(Cookies.get("sessionID"));
        console.log(error);
    })
}
function recommendWeather(weatherArray) {
    console.log(weatherArray);
    var i;
    console.log(weatherArray.length);
    var isWalk = false;
    var minTemp = 15;
    var maxTemp = 30;
    var bestTemp = 100;
    var bestIndex;
    for (i = 0; i<weatherArray.length ; i++)
    {
        var currentElement = weatherArray[i];

        let imageName = "Image" + i;
        document.getElementById(imageName).src = weatherIcon(currentElement[2]);

        //Checks for time and makes sure there are no adverse weather conditions
        if ((currentElement[1] >= minTemp && currentElement[1] <= maxTemp) && (currentElement[2]<=804 && currentElement[2]>=800))
        {
            //Change the text/location for good time to walk here
         /*   var recText = currentElement[0].getHours() + "o'clock is a good time to take a walk";
            var recPh = document.createElement("p").appendChild(document.createTextNode(recText));
            document.getElementById("walkRecommendation").appendChild(recPh);
            document.getElementById("walkRecommendation").appendChild(document.createElement("br")); */

            let textBoxName = "textbox" + i;
            document.getElementById(textBoxName).innerHTML += "Good Time to Walk";
            document.getElementById(imageName).style.filter = "brightness(100%)";

            isWalk = true;
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
          /*  console.log("No great times to walk.");
            var recText = "Its a bit chilly but " + weatherArray[bestIndex][0].getHours() + "o'clock is the best time to walk";
            var recPh = document.createElement("p").appendChild(document.createTextNode(recText));
            document.getElementById("walkRecommendation").appendChild(recPh);
            document.getElementById("walkRecommendation").appendChild(document.createElement("br")); */

            textBoxName = "textbox" + bestIndex;
            imageName = "Image" + bestIndex;
            document.getElementById(textBoxName).innerHTML += "Cold, but still the best time to walk today";
            document.getElementById(imageName).style.filter = "brightness(100%)";

        }
        if(weatherArray[bestIndex][1]>maxTemp)
        {
         /*   console.log("No great times to walk.");
            var recText = "Its a bit hot but " + weatherArray[bestIndex][0].getHours() + "o'clock is the best time to walk";
            var recPh = document.createElement("p").appendChild(document.createTextNode(recText));
            document.getElementById("walkRecommendation").appendChild(recPh);
            document.getElementById("walkRecommendation").appendChild(document.createElement("br")); */

            textBoxName = "textbox" + bestIndex;
            imageName = "Image" + bestIndex;
            document.getElementById(textBoxName).innerHTML += "Hot, but still the best time to walk today";
            document.getElementById(imageName).style.filter = "brightness(100%)";
        }

        //var recNoPh = document.createElement("p").appendChild(document.createTextNode("There aren't any good times to walk. Check back later."));
        //document.getElementById("walkRecommendation").appendChild(recNoPh);
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