// DEPENDENCIES ====================================================
// // DOM elements that you need to connect

// DATA ============================================================
// //global variable? starting data?
var curTime = moment();
var currentHour = moment().hours();
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

        // textarea
         var textElement = $("<textarea>");
                textElement.attr({
                "class": "col-10",
                "data-hour": h, //time slot hour
                });
        
        // save button .saveBtn
            var saveBtn = $('<button>');
                 saveBtn.attr("class", "col-1 saveBtn");
                //font awesome save icon
                saveBtn.html("<i class='fa fa-save'></i>")
    
        // append label + text area + saveButton
        liElement.append(label).append(textElement).append(saveBtn);
     }

}

generateSlots()

// change color class according to currentHour
$("textarea").each(function () {
    // convert data-hour attribute to an integer
    var blockHour = parseInt($(this).attr("data-hour"));
    // if statement to change block color based on hour of day
    if (blockHour < currentHour) {
        $(this).addClass("past");
    } else if (blockHour === currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
        }
    });

// USER INTERRACTIONS ==============================================

// On click to Save Button Save to Local Storage
$(".saveBtn").on("click", function(){
        var index = $(".saveBtn").index(this);
        console.log(index)
        
        // localStorage.setItem("tasks", JSON.stringify(tasks));
  });



