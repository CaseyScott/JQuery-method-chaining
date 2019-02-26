$(document).ready(function() {

    //removes class makeRed, adds class makeBorder on mouseenter
    $("button").mouseenter(function() {
        $(this).removeClass("makeRed").addClass("makeBorder");
    });

    $("button").mouseleave(function() {
        $("button").removeClass("makeBorder").addClass("makeRed");
    });

    $("button").click(function() {
        $("#para1").slideUp("slow", function() {});
    });

    $("button").click(function() {
        $("#para1").slideDown("slow", function() {});
    });


});
