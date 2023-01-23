// get current time from moment
var time = moment();

// places the date in the jumbotron
$("#currentDay").text(time.format("dddd, Do, MMMM"));

//creates a var 'timeNow' and converts the moment time hour value into an integer usuing parseInt
var timeNow = parseInt(time.format("H"));
console.log("The time is after: " + timeNow);

var saveButton = document.querySelectorAll(".saveBtn");

//turns the timeBlocks in HTML into an array so that each timeBlock can be accessed independently  
// or cycled through as an array. the '.desciption' class specifiaclly targets the textarea.   
var timeBlockArray = Array.from($(".description"));
    // console.log(timeBlockArray);

// cycles through the timeBlocks array 
for (var i = 0; i < timeBlockArray.length; i++) {  
    
    //uses parseInt for each timeBlock id (e.g. changes the id value (9-17) to an integer using parseInt).    
    var timeBlockId = parseInt(timeBlockArray[i].id);
    console.log(timeBlockId);
    
    // the if statement checks the timeBlockArray against 'time now' and changes the colours accordingly to css presets.
    //classList property returns the CSS classnames of an element. 
    //.add("") method adds a property or specified value to a selected element.  
    if (timeBlockId === timeNow) {
        timeBlockArray[i].classList.add("present");
    }   
    else if (timeBlockId < timeNow) {
        timeBlockArray[i].classList.add("past");
    }
    else if (timeBlockId > timeNow) {
        timeBlockArray[i].classList.add("future");
    }

    
    
    saveButton[i].addEventListener("click", function () {

       // get text area values
        var textEntered9 = $("#9").val();
        console.log(textEntered9);

        var textEntered10 = $("#10").val();
        console.log(textEntered10);
        var textEntered11 = $("#11").val();
        console.log(textEntered11);
        var textEntered12 = $("#12").val();
        console.log(textEntered12);
        var textEntered13 = $("#13").val();
        console.log(textEntered13);
        var textEntered14 = $("#14").val();
        console.log(textEntered14);
        var textEntered15 = $("#15").val();
        console.log(textEntered15);
        var textEntered16 = $("#16").val();
        console.log(textEntered16);

    //     // set text area values to local storage  
       
    //     console.log("Woo!");  
    });

 
};


// The app should:

// ** Display the current day at the top of the calender when a user opens the planner.  DONE
 
// ** Present timeblocks for standard business hours when the user scrolls down. DONE
 
// ** Color-code each timeblock based on past, present, and future when the timeblock is viewed. DONE
// grey for past, red for present, green for future  
 
// ** Allow a user to enter an event when they click a timeblock DONE

// ** Save the event in local storage when the save button is clicked in that timeblock.
// add an event listener that logs event to local Storage, e.g. .onclick localStorage

// ** Persist events between refreshes of a page
// call stored local storage info page start


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
// currentHourValue()