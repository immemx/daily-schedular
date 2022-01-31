//GIVEN I am using a daily planner to create a schedule
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click into a time block
//THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist

// Jquery waiting until its loaded to run this.
//$(document).ready(function() {

// variables
var businessHours = ["9am", '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']
var timeContainer = document.querySelector(".time-block") 
var scheduleArr = []

let nineAM = moment('9am', 'ha');
let tenAM = moment('10am', 'ha');
let elevenAM = moment('11am', 'ha');
let twelvePM = moment('12pm', 'ha');
let onePM = moment('1pm', 'ha');
let twoPM = moment('2pm', 'ha');
let threePM = moment('3pm', 'ha');
let fourPM = moment('4pm', 'ha');
let fivePM = moment('5pm', 'ha');


// Display current date at the top of the page
var currentDate = function() {
    var currentDayEl = document.querySelector("#currentDay");
    var currentTime = moment();
    currentDayEl.textContent = currentTime.format("dddd, MMMM DD")
};

//
var loadSchedule = function() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);

        if(currentPlan !== null) {
            $(this).siblings(".form").val(currentPlan);
        }
    });
}



// looping over bussinessHours array
for (var i = 0; i <= businessHours.length; i++) {

    // set currentHour to be momentjs in hour am/pm format
    var currentHour = moment().format("ha");

    var checkBusinessHour = moment(businessHours[i], 'ha')
    // Cycling through businessHours array looking for a class with the same name on the DOM.
    var checkedTimeBlock = document.getElementsByClassName(businessHours[i])
    
    // checking to see if the current hour is past/before each time block
    if (currentHour === businessHours[i]){
        $('.form').addClass("present");
    } 
    else if (currentHour < businessHours[i]){
        $('.form').addClass("future");
    }
    else if (currentHour > businessHours[i]){
        $('.form').addClass("past");
        console.log("this is working!")
    };
    
};


var saveSchedule = function(row, descriptionText) {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        // console.log(this);
        // console.log(currHour);

        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}

// Save buttone jQuery Listener - Finds corresponding text and and pushed data to save.
$('.saveBtn').on('click', function() {
    // siblings method to get adjacent textbox 
    // sibilings method to figure out what time block it is

    // Use the sibling method to grab corresponding textarea
    var row = $(this).siblings(".hour").text();
    var description = $(this).siblings(".form").val();

    // Update Local storage with new save
    localStorage.setItem(row, description);

});

loadSchedule();
currentDate();
//})