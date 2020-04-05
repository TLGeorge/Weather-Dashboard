// This is our API key. Add your own API key between the ""
var APIKey = "71711d92043900bc02d163c46a5ff92e";
var citySearched = document.getElementById("citySearched");
console.log(citySearched);
// var city = citySearched.value;
var city = "Miami";

// Add event listener to Search  Button
$("#searchButton").on("click", function (event) {
    console.log(citySearched);
    var V = citySearched.value;
    console.log("blahblah");
    localStorage.setItem("cities", V);
    console.log(localStorage);
})

// localStorage.setItem("cities", value);
// console.log(localStorage);

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=6&units=imperial&appid=" + APIKey;

// We then created an AJAX call
$.ajax({
    url: queryURL,
    method: 'GET'
}).done(function (response) {
    console.log(response);
    $("#MainCity").append(response.city.name);
    $("#temp").append(response.list[0].main.temp);
    $("#humid").append(response.list[0].main.humidity);
    $("#windy").append(response.list[0].wind.speed);
    // $("#uvi").append();

    // Set DAY 1 of Forecast
    $("date1").append();
    $("weathericon1").append(response.list[1].weather[0].icon);
    $("temperature1").append(response.list[1].main.temp);
    $("humidity1").append(response.list[1].main.humidity);
    // Day 2 of Forecast
    $("date2").append();
    $("weathericon2").append(response.list[2].weather[0].icon);
    $("temperature2").append(response.list[2].main.temp);
    $("humidity2").append(response.list[2].main.humidity);
    // Day 3 of Forecast
    $("date3").append();
    $("weathericon3").append(response.list[3].weather[0].icon);
    $("temperature3").append(response.list[3].main.temp);
    $("humidity3").append(response.list[3].main.humidity);
    // Day 4 of Forecast
    $("date4").append();
    $("weathericon4").append(response.list[4].weather[0].icon);
    $("temperature4").append(response.list[4].main.temp);
    $("humidity4").append(response.list[4].main.humidity);
    // Day 5 of Forecast
    $("date5").append();
    $("weathericon5").append(response.list[5].weather[0].icon);
    $("temperature5").append(response.list[5].main.temp);
    $("humidity5").append(response.list[5].main.humidity);

})