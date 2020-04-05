// This is our API key. Add your own API key between the ""
var APIKey = "71711d92043900bc02d163c46a5ff92e";
var city = "Miami";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=5&units=imperial&appid=" + APIKey;


// We then created an AJAX call
$.ajax({
    url: queryURL,
    method: "GET"
}).done(function (response) {
    console.log(response);
    $("#temp").append(response.list[0].main.temp);
})
