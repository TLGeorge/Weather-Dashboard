// Search Variables
var city = document.getElementById("citySearched").inputVal;
var searchHx = [];
var currentCityandDate = $("#MainCityandDate").textContent;

// console.log(citySearched);
// var city = citySearched.value;
// var city = "Miami";


// Add event listener to Search  Button
$("#searchButton").on("click", function (event) {
    console.log(city);
    // var V = citySearched.textContent;
    // console.log("blahblah");
    // localStorage.setItem("cities", city);
    // console.log(localStorage);
})

// localStorage.setItem("cities", value);
// console.log(localStorage);

// set date for current day weather
let today = new Date();
let date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
currentCityandDate.textContent = city + " " + "(" + date + ")";

// API Variables: Here we are building the URL we need to query the database
var APIKey = "71711d92043900bc02d163c46a5ff92e";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=6&units=imperial&appid=" + APIKey;


// Set weather based on Current search
var setWeather = function (city) {
    console.log("city has been searched");
    // We then created an AJAX call
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function (response) {
        console.log(response);
        // Set Main Display
        $("#MainCityandDate").append(response.city.name);
        $("#temp").append(response.list[0].main.temp);
        $("#humid").append(response.list[0].main.humidity);
        $("#windy").append(response.list[0].wind.speed);

        //Set UV INDEX
        const x = data["coord"]["lat"];
        const y = data["coord"]["lon"];

        fetch("https://api.openweathermap.org/data/2.5/uvi?appid=974d902c878dcae370e669f524ad6ba0&lat=" + x + "&lon=" + y + "")
            .then(response => response.json())
            .then(data => {
                const UVValue = data.value;
                $("#uvi").innerHTML = UVValue;

                //Set/Change UV Icon Color
                function updateBg() {

                    $("#UV").each(function () {
                        if (UVValue < 2) {
                            $(this).addClass("low");
                            $(this).removeClass("moderate");
                            $(this).removeClass("high");
                            $(this).removeClass("veryHigh");
                            $(this).removeClass("extreme");
                        }
                        else if (UVValue < 6 && UVValue > 3) {
                            $(this).removeClass("low");
                            $(this).addClass("moderate");
                            $(this).removeClass("high");
                            $(this).removeClass("veryHigh");
                            $(this).removeClass("extreme");

                        } else if (UVValue < 8 && UVValue > 6) {
                            $(this).removeClass("low");
                            $(this).removeClass("moderate");
                            $(this).addClass("high");
                            $(this).removeClass("veryHigh");
                            $(this).removeClass("extreme");
                        }
                        else if (UVValue < 11 && UVValue > 8) {
                            $(this).removeClass("low");
                            $(this).removeClass("moderate");
                            $(this).removeClass("high");
                            $(this).addClass("veryHigh");
                            $(this).removeClass("extreme");
                        }
                        else if (UVValue >= 11) {
                            $(this).removeClass("low");
                            $(this).removeClass("moderate");
                            $(this).removeClass("high");
                            $(this).removeClass("veryHigh");
                            $(this).addClass("extreme");
                        }
                    });
                }
                updateBg();
            })


        // // Set 5-Day Forecast
        // // DAY 1 of Forecast
        // $("date1").append();
        // $("weathericon1").append(response.list[1].weather[0].icon);
        // $("temperature1").append(response.list[1].main.temp);
        // $("humidity1").append(response.list[1].main.humidity);
        // // Day 2 of Forecast
        // $("date2").append();
        // $("weathericon2").append(response.list[2].weather[0].icon);
        // $("temperature2").append(response.list[2].main.temp);
        // $("humidity2").append(response.list[2].main.humidity);
        // // Day 3 of Forecast
        // $("date3").append();
        // $("weathericon3").append(response.list[3].weather[0].icon);
        // $("temperature3").append(response.list[3].main.temp);
        // $("humidity3").append(response.list[3].main.humidity);
        // // Day 4 of Forecast
        // $("date4").append();
        // $("weathericon4").append(response.list[4].weather[0].icon);
        // $("temperature4").append(response.list[4].main.temp);
        // $("humidity4").append(response.list[4].main.humidity);
        // // Day 5 of Forecast
        // $("date5").append();
        // $("weathericon5").append(response.list[5].weather[0].icon);
        // $("temperature5").append(response.list[5].main.temp);
        // $("humidity5").append(response.list[5].main.humidity);
    });


// function updateWeather() {
// }
// }
// updateWeather();
