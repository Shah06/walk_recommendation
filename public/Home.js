var weatherArray= [];
/** The function gets weather data for the next 15 hours and stores it in an array
*/
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
            weatherArray.push([currentTime, currentTemp]);
            var newWeatherText = "The weather at " + (currentTime) +" is " + (currentTemp) + " degrees Celsius";
            var newWeatherPh = document.createElement("p").appendChild(document.createTextNode(newWeatherText));
            document.getElementById("weatherlisting").appendChild(newWeatherPh);
            document.getElementById("weatherlisting").appendChild(document.createElement("br"));
        }
        recommendWeather();
    }, (error) => {
        console.log(Cookies.get("sessionID"));
        console.log(error);
    })
}
function recommendWeather() {
    var i;
    console.log(weatherArray.length);
    var isWalk = false;
    var minTemp = 15.55;
    var maxTemp = 26;
    for (i = 0; i<weatherArray.length ; i++)
    {
        var currentElement = weatherArray[i];
        if (currentElement[1] > minTemp && currentElement[1] < maxTemp)
        {
            var recText = weatherArray[i][0].getHours() + " is a good time to take a walk";
            var recPh = document.createElement("p").appendChild(document.createTextNode(recText));
            document.getElementById("walkRecommendation").appendChild(recPh);
            document.getElementById("walkRecommendation").appendChild(document.createElement("br"));
        }
    }
    if(!isWalk)
    {
        var recNoPh = document.createElement("p").appendChild(document.createTextNode("There aren't any good times to walk. Check back later."));
        document.getElementById("walkRecommendation").appendChild(recNoPh);
    }
}
updateWeather();