// DEPENDENCIES ====================================================
// // DOM elements that you need to connect


// DATA ============================================================
// //global variable? starting data?
var curTime = moment();
var workingHours = 10;
var startHour = 8

// FUNCTIONS =======================================================

// Add current date & time to the top of the page
$("#currentDay").text(curTime.format("dddd, MMMM Do YYYY,  h:mm a"));

// generate all the time rows startHour + workingHours
function generateSlots() {
    // Create // Build // Place
    // .time-block
    var olElement = $("<ol>");
    olElement.attr("class", "time-block");
    $('div.container').append(olElement);
    //row (- for loop)
     for (var i = startHour; i < startHour + workingHours; i++) {
        var liElement = $("<li>");
        liElement.attr("class", "row");
        $('ol').append(liElement);
     }
    // label
    // text area
    // save button
}
generateSlots()
// change color class according to curTime 

// USER INTERRACTIONS ==============================================

// On click to Save Button Save to Local Storage




