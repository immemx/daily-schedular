// variables

// Current Date
var currentDate = function() {
    var currentDayEl = document.querySelector("#currentDay");
    var currentTime = moment();
    currentDayEl.textContent = currentTime.format("dddd, MMMM DD")
}

var createSchedule = function() {

    // Create Elements
    var scheduleRow = document.createElement("div")
    scheduleRow.className = "col-12"
}











currentDate()

