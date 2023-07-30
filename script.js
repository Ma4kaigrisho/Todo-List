$(document).ready(function(){
    $(".btn").click(function(textval){
        textval = $("#task").val();
        $("#tasks").append(`<li class = "task">`+ textval +` <i class="bx bxs-edit bx-sm"></i> <i class="bx bxs-trash bx-sm"></i></li>`);
    })
    
})