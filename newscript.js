var city = document.getElementById("citySearched");

// API Variables: Here we are building the URL we need to query the database
var APIKey = "71711d92043900bc02d163c46a5ff92e";
// var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + V + "&cnt=6&units=imperial&appid=" + APIKey;
// var V = ;

// Add event listener to Search  Button
$("#searchButton").on("click", function () {
    event.preventDefault();
    var V = city.value;
    console.log(V);
    localStorage.setItem("cities", V);
    // console.log(localStorage);
    // localStorage.getItem(V);
    // var searchHx = localStorage.cities(i);
    // var hxVal = localStorage.getItem(V);
    getWeather(V);

    // for (let i = 0; i < localStorage.length; i++) {
    // const element = localStorage[i];
    // var searchHx = localStorage.cities(i);
    // var hxVal = localStorage.getItem(V);
    // var searchHx = localStorage.cities(i);
    //     $("#SearchHistory").append(searchHx + hxVal + "<br>");

    // }
})


function getWeather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=5&units=imperial&appid=" + APIKey;
    // We then created an AJAX call
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function (response) {
        console.log(response);
        // set date for current day weather
        let today = new Date();
        let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

        // Set Main Display
        $("#MainCityandDate").empty();
        $("#MainCityandDate").html(response.city.name + "(" + date + ")");
        $("#temp").empty();
        $("#temp").html(response.list[0].main.temp);
        $("#humid").empty();
        $("#humid").html(response.list[0].main.humidity);
        $("#windy").empty();
        $("#windy").html(response.list[0].wind.speed);

        // Set 5-Day Forecast
        // DAY 1 of Forecast
        $("#day1Date").empty();
        $("#day1Date").html(date);
        $("#day1Icon").empty();
        $("#day1Icon").html(response.list[0].weather[0].icon);
        $("#day1temp").empty();
        $("#day1temp").html(response.list[0].main.temp);
        $("#day1Humidity").empty();
        $("#day1Humidity").html(response.list[0].main.humidity);
        // Day 2 of Forecast
        $("#day2Date").empty();
        $("#day2Date").html();
        $("#day2Icon").empty();
        $("#day2Icon").html(response.list[1].weather[0].icon);
        $("#day2temp").empty();
        $("#day2temp").html(response.list[1].main.temp);
        $("#day2Humidity").empty();
        $("#day2Humidity").html(response.list[1].main.humidity);
        // Day 3 of Forecast
        $("#day3Date").empty();
        $("#day3Date").html();
        $("#day3Icon").empty();
        $("#day3Icon").html(response.list[2].weather[0].icon);
        $("#day3temp").empty();
        $("#day3temp").html(response.list[2].main.temp);
        $("#day3Humidity").empty();
        $("#day3Humidity").html(response.list[2].main.humidity);
        // Day 4 of Forecast
        $("#day4Date").empty();
        $("#day4Date").html();
        $("#day4Icon").empty();
        $("#day4Icon").html(response.list[3].weather[0].icon);
        $("#day4temp").empty();
        $("#day4temp").html(response.list[3].main.temp);
        $("#day4Humidity").empty();
        $("#day4Humidity").html(response.list[3].main.humidity);
        // Day 5 of Forecast
        $("#day5Date").empty();
        $("#day5Date").html();
        $("#day5Icon").empty();
        $("#day5Icon").html(response.list[4].weather[0].icon);
        $("#day5temp").empty();
        $("#day5temp").html(response.list[4].main.temp);
        $("#day5Humidity").empty();
        $("#day5Humidity").html(response.list[4].main.humidity);

        // Set Main UV Index
        function setUVI() {
            var uviURL = "api.openweathermap.org/data/2.5/uvi/forecast?" + APIKey + "lat=37.75&lon=-122.37";
            // We then created an AJAX call
            $.ajax({
                url: uviURL,
                method: 'GET'
            }).done(function (response) {
                console.log(response);
            });
        }


    });
}