// DEPENDENCIES ====================================================
// // DOM elements that you need to connect

// DATA ============================================================
// //global variable? starting data?
var curTime = moment();
var workingHours = 9;
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
    // run a loop
     for (var i = startHour; i < startHour + workingHours; i++) {
        // .row
        var liElement = $("<li>");
        liElement.attr("class", "row");
        $('ol').append(liElement);
        
        // time tags
        var tag = '';
            var h = i % 24;
            if (h < 12) {
                tag = h + "AM";
            } else if (h == 12) {
                tag = h + "PM";
            } else {
                tag = (h - 12) + "PM";
            }
        
        // label .hour (css) .col-1 (bootstrap)
        var label = $("<label>");
            label.attr("class", "col-1 hour");
            label.text(tag);

        // text area
         var textElement = $("<textarea>");
                textElement.attr({
                'class': "col-10"
                });
        
        // save button

        // append label + text area + saveButton
        liElement.append(label).append(textElement)
     }


}
generateSlots()
// change color class according to curTime 

// USER INTERRACTIONS ==============================================

// On click to Save Button Save to Local Storage




