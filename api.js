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
    // $("#temp").append(response.list[0].main.temp);
    // $("#humidity").append();
    // $("#wind").append();
    // $("#uvi").append();

    // // DAY 1 of Forecast
    // $("date1").append();
    // $("weathericon1").append();
    // $("temperature1").append(response.list[1].main.temp);
    // $("humidity1").append();
    // // Day 2 of Forecast
    // $("date2").append();
    // $("weathericon2").append();
    // $("temperature2").append(response.list[2].main.temp);
    // $("humidity2").append();
    // // Day 3 of Forecast
    // $("date3").append();
    // $("weathericon3").append();
    // $("temperature3").append(response.list[3].main.temp);
    // $("humidity3").append();
    // // Day 4 of Forecast
    // $("date4").append();
    // $("weathericon4").append();
    // $("temperature4").append(response.list[4].main.temp);
    // $("humidity4").append();
    // // Day 5 of Forecast
    // $("date5").append();
    // $("weathericon5").append();
    // $("temperature5").append(response.list[5].main.temp);
    // $("humidity5").append();
})
