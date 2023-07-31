$(document).ready(function(){
    $("#submit-btn").click(function(textval){
        textval = $("#task").val();
        $("#tasks").append(`<li class = "task"> <p>`+ textval +` </p><i class="bx bxs-edit bx-sm"></i> <i class="bx bxs-trash bx-sm"></i></li>`);
    })
    $("#tasks").on("click", ".bxs-trash" , function(){
        $(this).parent().remove();
    })
    function setDefault(){
        $("#task").val("");
        $("#submit-btn").text("Submit");
        $("#submit-btn").removeClass("edit")
        $(".cancel-btn").addClass("hide");
        $(".bx").show();
    }
    $("#tasks").on("click" , ".bxs-edit", function(){
        console.log($(this).prev("p").html());
        $("#task").val($(this).prev("p").html());
        $("#submit-btn").text("Edit");
        $("#submit-btn").addClass("edit")
        $(".cancel-btn").removeClass("hide");
        $(".bx").hide();
    })
    $(".list").on("click",".edit", function(){

    })
    
})