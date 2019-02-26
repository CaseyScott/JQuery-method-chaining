$(document).ready(function() {

    //removes class makeRed, adds class makeBorder on mouseenter
    $("button").mouseenter(function() {
        $(this).removeClass("makeRed").addClass("makeBorder");
    });

    $("button").mouseleave(function() {
        $("button").removeClass("makeBorder").addClass("makeRed");
    });

    $("button").click(function() {
        $("p").slideToggle(1000);
    });

   /* $("button").click(function(){
        $("p").hide(1000).show(1000);
    })*/


});
