$("p").hide("fast");
$("p").toggle("slow",function () {
    $(this).addClass("blue");  
})
$("button").on("click",function(){
    $("p").stop();
})
