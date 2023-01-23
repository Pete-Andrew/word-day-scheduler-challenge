// get current time from moment
var time = moment();

// places the date in the jumbotron
$("#currentDay").text(time.format("dddd, Do, MMMM"));


//creates a var 'timeNow' and converts the moment time hour value into an integer usuing parseInt
var timeNow = parseInt(time.format("H"));
console.log("The time is after: " + timeNow);

//turns the timeBlocks in HTML into an array so that each timeBlock can be accessed independently  
// or cycled through as an array. the '.desciption' class specifiaclly targets the textarea.   
var timeBlockArray = Array.from($(".description"));
    // console.log(timeBlockArray);

// cycles through the timeBlocks array 
for (var i = 0; i < timeBlockArray.length; i++) {  
    
    //uses parseInt for each timeBlock id (e.g. changes the id value (9-17) to an intiger using parseInt).    
    var timeBlockId = parseInt(timeBlockArray[i].id);
    console.log(timeBlockId);
    
    // the if statement checks the timeBlockArray agains 'time now' and changes the colours accordingly to the css presets
    //classList.add 
    if (timeBlockId === timeNow) {
        timeBlockArray[i].classList.add("present");
    }   
    else if (timeBlockId < timeNow) {
        timeBlockArray[i].classList.add("past");
    }
    else if (timeBlockId > timeNow) {
        timeBlockArray[i].classList.add("future");
    }


}



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


// spare code:


//// Assign current time to a var, use jquery to select the id 'current time' give it text (e.g. the time)
// function currentTime () {
//     var currentTime = $("#currentTime").text(time.format("hh:mm:ss"));
//     $("#currentTime").hide();  
//     }
// currentTime();

////takes the current time variable and turns it into 24h hour only time
// function currentHourValue() { 
//     var currentHour = $("#currentHour").text(time.format("H")); 
//     console.log(currentHour);
//     $("#currentHour").hide();
//     // return currentHour;
//     }
// currentHourValue(); 