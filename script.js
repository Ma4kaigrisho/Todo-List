$(document).ready(function(){
    let editIndex = -1;
    $("#submit-btn").click(function(textval){
        textval = $("#task").val();
        if(textval.trim() != ""){
            if(editIndex === -1){
                $("#tasks").append(`<li class = "task list-group-item"> <p>`+ textval +` </p><i class="bx bxs-edit bx-sm"></i> <i class="bx bxs-trash bx-sm"></i></li>`);

            }
            else{
                $("#tasks li").eq(editIndex).find("p").text(textval);
                setDefault();
                editIndex = -1;
            }
            $("#task").val("");
        }
        
    })
    $("#tasks").on("click", ".bxs-trash" , function(){
        $(this).parent().remove();
    })
    function setDefault(){
        $("#task").val("");
        $("#submit-btn").text("Submit");
        $("#submit-btn").removeClass("edit")
        $(".cancel-btn").addClass("d-none");
        $(".bx").show();
        $("#tasks li").eq(editIndex).removeClass("active")
    }
    $("#tasks").on("click" , ".bxs-edit", function(){
        editIndex = $(this).parent().index();
        $(this).parent().addClass("active")
        $("#task").val($(this).prev("p").html());
        $("#submit-btn").text("Edit");
        $("#submit-btn").addClass("edit")
        $(".cancel-btn").removeClass("d-none");
        $(".bx").hide();
    })
    $(".cancel-btn").on("click", function(){
        setDefault();

    })
    
})