$(document).ready(function() {

    //removes class makeRed, adds class makeBorder on mouseenter
    $("#button1").mouseenter(function() {
        $(this).removeClass("makeRed").addClass("makeBorder");
    });

    $("#button1").mouseleave(function() {
        $("button").removeClass("makeBorder").addClass("makeRed");
    });

    $("#button2").mouseenter(function() {
        $(this).removeClass("makeRed").addClass("makeBorder");
    });

    $("#button2").mouseleave(function() {
        $("button").removeClass("makeBorder").addClass("makeRed");
    });

    $("#button1").click(function() {
        $("#para1").fadeOut(1000).fadeIn(1000)
    })

    $("#button2").click(function() {
        $("#para2").slideToggle(1000);
    });
    
    /*$("button").click(function() {
        $("p").slideToggle(1000);
    });*/

    /*$("button").click(function() {
        $("p").hide(9000).show(9000);
    });*/
});
