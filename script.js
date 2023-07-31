$(document).ready(function(){
    $(".btn").click(function(textval){
        textval = $("#task").val();
        $("#tasks").append(`<li class = "task"> <p>`+ textval +` </p><i class="bx bxs-edit bx-sm"></i> <i class="bx bxs-trash bx-sm"></i></li>`);
    })
    $(".bxs-edit").click(function(){
        console.log(this.previousElementSibling)
    })
    $("#tasks").on("click", ".bxs-trash" , function(){
        $(this).parent().remove();
    })
})