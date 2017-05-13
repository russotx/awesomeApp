var checkedDays = [];
var userTopic;

$("#submit").on('click', function(e) {
    e.preventDefault();
    for (var i = 1; i < 8; i++) {
        if ($("#checkbox-" + String(i)).is(':checked')) {
            checkedDays.push($("#checkbox-" + String(i)).val());
        };
    }; //end for loop

    console.log(checkedDays);
    //Clear check boxes after submitting
    $(".days").prop("checked", false);
    $(".days").checkboxradio("refresh");

    userTopic = $("#userTopic").val();
    //console.log(userTopic);
    $("#userTopic").val("");

    //Close the dialog box
    $("#dialog").dialog("close");
}); //end #submit click event handler

//jQueryUI function for accordion 
$(function() {
    $("#accordion").accordion({
        collapsible: true
    });
});

//jQueryUI function for the checkbox 
$(function() {
    $(".days").checkboxradio();
});

//jQueryUI function for autocomplete
$(function() {
    $("#userTopic").autocomplete({
        source: availableTags
    });
});

var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Express",
    "Fortran",
    "Groovy",
    "Haskell",
    "HTML",
    "Java",
    "JavaScript",
    "jQuery",
    "Lisp",
    "Node.js",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
];

//Function for jqueryUI dialog widget
$("#dialog").dialog({
    autoOpen: false
});
$("#opener").click(function() {
    $("#dialog").dialog("open");
});