function UpdateWeather() {
    axios.post('http://localhost:80/weather', {

        sessionId: Cookies.get("sessionID")
    })
    .then ((response) => {
        var resp = response.data.list;
        console.log(response);
        var i;
        for (i = 0; i<5; i++) {
            var newWeatherText = "The weather at " + (resp[i]["dt_txt"]) +" is " + (Math.trunc(resp[i]['main']['temp']-273.15)) + " degrees Celsius";
            var newWeatherPh = document.createElement("p").appendChild(document.createTextNode(newWeatherText));
            document.getElementById("weatherlist").appendChild(newWeatherPh);
            document.getElementById("weatherlist").appendChild(document.createElement("br"));
        }
        
    }, (error) => {
        console.log(Cookies.get("sessionID"));
        console.log(error);
    })
}
UpdateWeather();
