
// Variables
var searchButton = document.querySelector(".searchButton");
var citySearched = document.querySelector(".searchButton input");



// Main City Display
// var mainCity = $("MainCity");
// var mainTemp = $("Temperature")
// var mainHumidity = $("Humidity");
// var mainWindSpeed = $("WindSpeed");
// var mainUVIndex = $("UVIndex");



// Add event listener to "Start Quiz" button
searchButton.addEventListener("submit", e => {
    e.preventDefault();
    const inputValue = citySearched.value;
    console.log(inputValue);
});


// API Key 


//Display current weather stats for searched city
// function setWeather() {
//     var currentDate = $("#MainCity");

//     const today = moment();
//     currentDate.text(today.format("dddd" + ", " + "MMMM" + " " + "DD" + ", " + "YYYY"));

//     // Set Temperature

//     // Set Humidity

//     // Wind Speed

//     // Set UV Index
// }
// setWeather();

// // 5 Day Forecast

// // Day 1
// var day1Date = $("date1");
// var day1Icon = $("weathericon1");
// var day1Temp = $("temperature1");
// var day1Humidity = $("humidity1");
// // Day 2
// var day2Date = $("date2");
// var day2Icon = $("weathericon2");
// var day2Temp = $("temperature2");
// var day2Humidity = $("humidity2");
// // Day 3
// var day3Date = $("date3");
// var day3Icon = $("weathericon3");
// var day3Temp = $("temperature3");
// var day3Humidity = $("humidity3");
// // Day 4
// var day4Date = $("date4");
// var day4Icon = $("weathericon4");
// var day4Temp = $("temperature4");
// var day4Humidity = $("humidity4");
// // Day 5
// var day5Date = $("date5");
// var day5Icon = $("weathericon5");
// var day5Temp = $("temperature5");
// var day5Humidity = $("humidity5");

// // Add event listener to "Start Quiz" button
// searchButton.addEventListener("click", setWeather);
// console.log("city search")


// //Display current weather stats for searched city
// function setWeather() {
//     var currentDate = $("#MainCity");

//     const today = moment();
//     currentDate.text(today.format("dddd" + ", " + "MMMM" + " " + "DD" + ", " + "YYYY"));

    // Set Temperature

    // Set Humidity

    // Wind Speed

    // Set UV Index
// }
// setWeather();

//Display current date in Jumbotron
// function setDateTime() {
//     var dateTimeP = $("#currentDay");

//     const today = moment();
//     dateTimeP.text(today.format("dddd" + ", " + "MMMM" + " " + "DD" + ", " + "YYYY"));
// }
// setDateTime();

