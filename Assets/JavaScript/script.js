// code runs when document is finished loading
$(document).ready(function () {
    // time variables
    var currentHour = new Date().getHours();
    var currentDateAndTime = Date(Date.now());
    $("#currentDay").text(currentDateAndTime);
    

    document.onload = updateTime();
    document.onload = getValueText();

    // loops over time-blocks to set past, present, or future classes which determines css styling
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
    // update the time every 60seconds
    setInterval(updateTime, 60000);

    // get key/value pairs from local storage and render them to each time-block div
    function getValueText() {

        // for (var i = 0; i < 10; i++ ) {}

        if (localStorage.key !== null) {
            var hour9 = localStorage.getItem('hour-9');
            $('#hour-9').children('textarea').val(hour9);

            var hour10 = localStorage.getItem('hour-10');
            $('#hour-10').children('textarea').val(hour10);

            var hour11 = localStorage.getItem('hour-11');
            $('#hour-11').children('textarea').val(hour11);

            var hour12 = localStorage.getItem('hour-12');
            $('#hour-12').children('textarea').val(hour12);

            var hour13 = localStorage.getItem('hour-13');
            $('#hour-13').children('textarea').val(hour13);

            var hour14 = localStorage.getItem('hour-14');
            $('#hour-14').children('textarea').val(hour14);

            var hour15 = localStorage.getItem('hour-15');
            $('#hour-15').children('textarea').val(hour15);

            var hour16 = localStorage.getItem('hour-16');
            $('#hour-16').children('textarea').val(hour16);

            var hour17 = localStorage.getItem('hour-17');
            $('#hour-17').children('textarea').val(hour17);
        }

        // Update the current date/time at the top of the page
        updateTime();
    }

    // When "Save" button is clicked...
    $('.saveBtn').on('click', function (event) {
        event.preventDefault();
        var element = event.target;

        // If that element is a button...
        if (element.matches('button') === true) {

            // Get the value of the user's input for each time block
            var hourBlock = $(element).parent().attr('id');
            var valueText = $(element).siblings('textarea').val().trim();

            // Store updated user input in local storage, re-render the list
            localStorage.setItem(hourBlock, valueText);
            getValueText();

        }

    })

})