// Wait for DOM to be "ready", then...
// Create a function to update the hours
// Get the current hour in military time (i.e. 14 for 2pm)

$(document).ready(function () {
    // time variables
    var currentHour = new Date().getHours();
    var currentDateAndTime = Date(Date.now());
    $("#currentDay").text(currentDateAndTime);
    // display variables
    // var textArea = $('#.description');
    // var timeBlock = $('.time-block');

    var inputArr = [];

    // Loop over all of the .time-blocks
    // Figure out which hour this block represents
    // If this block's hour is less than the current hour:
    // Add the class "past" to this block
    // Else if this block's hour is the current hour:
    // Remove "past" class from this time block
    // Add "present" class to this time block
    // Else
    // Remote the "past" class from this time block
    // Remove the "present" class from this time block
    // Add the "future" class to this time block
    function updateTime() {

        $('.time-block').each(function () {
           var hour = parseInt($(this).attr('id').split('-')[1])
            // console.log(hour);
            if (hour < currentHour) {
                $(this).addClass('past');
            } else if (hour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).addClass('future');
            }
        })
    }


    // Call the function we just created to update the hours the first time
    // Re-run the function on an interval (every 60s?) to update as time changes
    document.onload = updateTime();
    setInterval(updateTime, 60000);

    // Load data for 9AM block from localStorage
    // Load data for 10AM block from localStorage
    // Load data for 11AM block from localStorage
    // Load data for 12PM block from localStorage
    // Load data for 1PM block from localStorage
    // Load data for 2PM block from localStorage
    // Load data for 3PM block from localStorage
    // Load data for 4PM block from localStorage
    // Load data for 5PM block from localStorage

    // Update the current date/time at the top of the page
    // function getUserText() {

    //     // JSON.parse(localStorage.getItem('hour-9'));
    //     // JSON.parse(localStorage.getItem('hour-10'));
    //     // JSON.parse(localStorage.getItem('hour-11'));
    //     // JSON.parse(localStorage.getItem('hour-12'));
    //     // JSON.parse(localStorage.getItem('hour-13'));
    //     // JSON.parse(localStorage.getItem('hour-14'));
    //     // JSON.parse(localStorage.getItem('hour-15'));
    //     // JSON.parse(localStorage.getItem('hour-16'));
    //     // JSON.parse(localStorage.getItem('hour-17'));

        
    // }


    // Store the value from the textarea in localStorage, using the hour as the key
    // function storeUserText() {
    //     // Stringify and set "hour" keys in localStorage to userText array
    //     // localStorage.setItem('hour-9', JSON.stringify(hour9));
    //     // localStorage.setItem('hour-10', JSON.stringify(hour10));
    //     // localStorage.setItem('hour-11', JSON.stringify(hour11));
    //     // localStorage.setItem('hour-12', JSON.stringify(hour12));
    //     // localStorage.setItem('hour-13', JSON.stringify(hour13));
    //     // localStorage.setItem('hour-14', JSON.stringify(hour14));
    //     // localStorage.setItem('hour-15', JSON.stringify(hour15));
    //     // localStorage.setItem('hour-16', JSON.stringify(hour16));
    //     // localStorage.setItem('hour-17', JSON.stringify(hour17));
    // }


    // Set up a click handler for the save button:
    // When "Save" button is clicked...
    $('.saveBtn').on('click', function (event) {
        event.preventDefault();
        var element = event.target;

        // If that element is a button...
        if (element.matches('button') === true) {
            alert('You clicked a button!');

            // Get the value of the user's input for each time block
            var hourBlock = $(element).parent().attr('id');
            var valueText = $(element).siblings('textarea').val().trim();
            
        
            localStorage.setItem(hourBlock, valueText);

            // Store updated userText in local storage, re-render the list
            // storeUserText();
            // renderUserText();

        }

    })




})