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
 
};

// adds an event listener that runs on click
$('.saveBtn').on('click', function () {
  // get nearby values of the description in jQuery
  var textEntered = $(this).siblings('.description').val();
  // gets the id attribute (e.g. h9-h17) of the parent div, and stores it a var. 
  // lcoal storage requires key/value pairs.  
  var hourKey = $(this).parent().attr('id');
  // saves the key and value in local storage. 
  localStorage.setItem(hourKey, textEntered);

  console.log(hourKey);
  console.log(textEntered);
});

// recalls item from local storage  
//Could tidy this up with a for loop? 
function recalLocalStorage () {
$('#h9  .description').val(localStorage.getItem('h9'));
$('#h10 .description').val(localStorage.getItem('h10'));
$('#h11 .description').val(localStorage.getItem('h11'));
$('#h12 .description').val(localStorage.getItem('h12'));
$('#h13 .description').val(localStorage.getItem('h13'));
$('#h14 .description').val(localStorage.getItem('h14'));
$('#h15 .description').val(localStorage.getItem('h15'));
$('#h16 .description').val(localStorage.getItem('h16'));
$('#h17 .description').val(localStorage.getItem('h17'));

}; 

recalLocalStorage(); 

// The app should:

// ** Display the current day at the top of the calender when a user opens the planner.  DONE
 
// ** Present timeblocks for standard business hours when the user scrolls down. DONE
 
// ** Color-code each timeblock based on past, present, and future when the timeblock is viewed. DONE
// grey for past, red for present, green for future  
 
// ** Allow a user to enter an event when they click a timeblock DONE

// ** Save the event in local storage when the save button is clicked in that timeblock. DONE
// add an event listener that logs event to local Storage, e.g. .onclick localStorage

// ** Persist events between refreshes of a page DONE
// call stored local storage info page start

