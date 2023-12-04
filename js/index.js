console.log("good job, it's set up correctly");
$("nav").on(click, function(){
    $('workGrid').animate({
        scrollTop: $("project3").offset().top},
        'slow');
});