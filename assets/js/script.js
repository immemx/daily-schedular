//GIVEN I am using a daily planner to create a schedule
//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click into a time block
//THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist

// variables
var businessHours = ["9am", '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']
const timeContainer = document.querySelector(".time-block") 


// Display current date at the top of the page
var currentDate = function() {
    var currentDayEl = document.querySelector("#currentDay");
    var currentTime = moment();
    currentDayEl.textContent = currentTime.format("dddd, MMMM DD")
}

// Dynamically create HTML elements for each hour on the schedule. 
var createSchedule = function() {

    // Create Elements
    for (var i = 0; i >= businessHours.length; i++){

        var scheduleRow = document.createElement("div")
        scheduleRow.className = "col-12"

        var scheduleTime = document.createElement("p")
        scheduleTime.innerHTML = businessHours[i]
        scheduleTime.className = "hour"

        scheduleRow.appendChild(scheduleTime)
        timeContainer.appendChild(scheduleRow)

    };
};

currentDate()


