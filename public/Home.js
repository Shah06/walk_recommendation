var weatherArray= [];
function updateWeather() {
    axios.post('http://localhost:80/weather', {
        sessionId: Cookies.get("sessionID")
    })
    .then ((response) => {
        var resp = response.data.list;
        console.log(response);
        var i;
        weatherArray = [];
        for (i = 0; i<5; i++) {
            var currentTemp = (resp[i]['main']['temp']-273.15).toPrecision(3);
            var currentTime = new Date(resp[i]["dt"]*1000);
            console.log(currentTime);
            weatherArray.push([currentTime, currentTemp]);
            var newWeatherText = "The weather at " + (currentTime) +" is " + (currentTemp) + " degrees Celsius";
            var newWeatherPh = document.createElement("p").appendChild(document.createTextNode(newWeatherText));
            //Append the weather data to the docuemnt
            document.getElementById("weatherlisting").appendChild(newWeatherPh);
            //Create a line break
            document.getElementById("weatherlisting").appendChild(document.createElement("br"));
        }
    }, (error) => {
        console.log(Cookies.get("sessionID"));
        console.log(error);
    })
}
function recommendWeather() {
    var i;
    for (i = 0; i<weatherArray.length ; i++)
    {
        console.log("hhee ehehe");
        var currentElement = weatherArray[i];
        if (currentElement[1]>7 && currentElement[1]<26)
        {
            var recText = weatherArray[i][0].getHours() + " is a good time to take a walk";
            document.getElementById("walkRecommendation").appendChild(recText);
            document.getElementById("walkRecommendation").appendChild(document.createElement("br"));
        }
    }
}
updateWeather();
recommendWeather();