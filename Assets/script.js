// Utilize moment to get to the date and time at the current time. This data will be placed in 2 variables.
var date = moment().format('dddd, MMMM Do, YYYY');
var curHour= parseInt(moment().format('H'));
var enterTask = $(".enterTask");

  // Current day beneath header.
  $("#currentDay").text(date);

  // Color changing function for the rows.
  enterTask.each(function () {

// Cross-checks the hour block time against current time.
var hour = $(this).parent('.row');
var hr = parseInt(hour.attr('id'));
    
    //  Cross checks if current hour is greater than the time of the block.
    if (hr < curHour) {
        $(this).addClass('expired');
    
    // Cross checks if current hour matches the time of the block.
    } else if (hr === curHour) {
        $(this).removeClass('expired');
        $(this).addClass('current');
    }   else {
        $(this).removeClass('expired');
        $(this).removeClass('current');
        $(this).addClass('future');
    }
});

// Array that references the hour blocks for inputted tasks when the paged is refreshed.
var hrBlock = ['09', '10', '11', '12', '13', '14', '15', '16', '17'];

// Stores inputted tasks and makes array accessible to local storage. 
var taskInput = JSON.parse(localStorage.getItem('taskInput')) || {};
