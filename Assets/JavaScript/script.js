// Wait for DOM to be "ready", then...
// Create a function to update the hours
// Get the current hour in military time (i.e. 14 for 2pm)

$(document).ready(function () {
    // var currentHour = new Date().getHours();

    var now = new Date;
    currentHour = now.getHours();
    var currentDateAndTime = Date(Date.now());
    $("#currentDay").text(currentDateAndTime);
    // var textArea = $('.description').val()
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
    // function updateTime() {

    //     var timeBlock = document.querySelectorAll(".time-block");

    //     for (var i = 0; i < timeBlock.length; i++) {


    //         console.log('timeBlock: ', timeBlock[i]);

    //         var hour = parseInt($(timeBlock).attr('id').split('-')[1]);
    //         console.log(hour);

    //         if (hour < 13) {
    //             $(timeBlock[i]).addClass('past');
    //         }
    //         else if (hour === 13) {
    //             $('.time-block').removeClass('past');
    //             $('.time-block').addClass('present');
    //         } else {
    //             $('.time-block').addClass('future');
    //         }
    //     }
    // }

    function updateTime() {

        $('.time-block').each(function () {
            hour = parseInt($(this).attr('id').split('-')[1])
            console.log(hour);
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

    updateTime();
    setInterval(updateTime, 60000);





    // Call the function we just created to update the hours the first time
    // Re-run the function on an interval (every 60s?) to update as time changes
    // document.onload = updateTime();


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
    localStorage.getItem('hour-9');
    localStorage.getItem('hour-10');
    localStorage.getItem('hour-11');
    localStorage.getItem('hour-12');
    localStorage.getItem('hour-13');
    localStorage.getItem('hour-14');
    localStorage.getItem('hour-15');
    localStorage.getItem('hour-16');
    localStorage.getItem('hour-17');


    // Set up a click handler for the save button:
    // Get the value from the textarea in the block that is being saved
    // Get the time (i.e. 9) of the time block that's being saved
    // Store the value from the textarea in localStorage, using the hour as the key

    // var text = $('.description');

    $('.saveBtn').on('click', function (event) {
        event.preventDefault();
        var element = event.target;

        if (element.matches('button') === true) {
            alert('You clicked a button!');
            var userInput = $(element).siblings('textarea').val();
            // console.log(userInput);
            inputArr.push(userInput);

            localStorage.setItem('hour', userInput)
            // var value = $(divId).children('textarea.);
            // var value = element.siblings.getAttribute('data-value');
            // console.log(value);



            //  var y = $('div:nth-child(2)').value
            //  console.log(y);

            // var item = document.createElement("div");
            // item.textContent = groceries[event.target.parentElement.id];
            // shoppingCartEl.append(item);
        }

    })


})