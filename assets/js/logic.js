var weekDay = moment();
$("#currentDay").text(weekDay.format("dddd, Do, MMMM"));

var time = moment();

// get current time from moment
// Assign current time to a var, use jquery to select the id 'current time' give it text (e.g. the time)
function currentTime () {
var currentTime = $("#currentTime").text(time.format("hh:mm:ss"));
// $("#currentTime").hide();
console.log(currentTime);
}

currentTime();

function currentHour() { 
var currentHour = $("#currentHour").text(time.format("H")); 
console.log(currentHour);
// $("#currentHour").hide();
}

currentHour(); 

// The app should:

// ** Display the current day at the top of the calender when a user opens the planner.  DONE
 
// ** Present timeblocks for standard business hours when the user scrolls down. DONE
 
// ** Color-code each timeblock based on past, present, and future when the timeblock is viewed. 
// grey for past, red for present, green for future

// set a variable for time = moment value. Need to set a loop that checks to compare the current time (moment value) 
// with values on the timeblocks
 
// ** Allow a user to enter an event when they click a timeblock

// ** Save the event in local storage when the save button is clicked in that timeblock.
// add an event listener that logs event to local Storage, e.g. .onclick localStorage

// ** Persist events between refreshes of a page
// call stored local sotrage info page start

// The following animation demonstrates the application functionality:

// ![A user clicks on slots on the color-coded calendar and edits the events.](./images/05-third-party-apis-homework-demo.gif)

