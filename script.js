$(document).ready(function(){
    let editIndex = -1;
    let disableSorting = false;
    $("#submit-btn").click(function(textval){
        textval = $("#task").val();
        if(textval.trim() != ""){
            if(editIndex === -1){
                $("#tasks").append(`<li class = "task border-bottom bg-transparent"> <span class="task-number"></span> <p class="fs-2">`+ textval +` </p><i class="bx bxs-edit bx-md"></i> <i class="bx bxs-trash bx-md"></i><i class="bx bx-check bx-md"></i></li>`);

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
        updateTaskNumbers();
    })
    $("#tasks").on("click",".bx-check", function(){
        $(this).parent().find("p").toggleClass("checked");
        $(this).parent().find(".bxs-edit").toggle();
    })
    function setDefault(){
        $("#task").val("");
        $("#submit-btn").text("Submit");
        $("#submit-btn").removeClass("edit")
        $(".cancel-btn").addClass("d-none");
        $(".bx").show();
        $("#tasks li").eq(editIndex).removeClass("edit-color")
        editIndex = -1;
        $("#tasks").sortable("enable");
    }
    $("#tasks").on("click" , ".bxs-edit", function(){
        editIndex = $(this).parent().index();
        $(this).parent().addClass("edit-color")
        $("#task").val($(this).prev("p").html());
        $("#submit-btn").text("Edit");
        $("#submit-btn").addClass("edit")
        $(".cancel-btn").removeClass("d-none");
        $(".bx").hide();
        $("#tasks").sortable("disable");
    })
    $(".cancel-btn").on("click", function(){
        setDefault();

    })
    $("#tasks").sortable({
        update: function () {
            updateTaskNumbers();
        }
      });
    
      // Function to update numeric order
      function updateTaskNumbers() {
        $("#tasks li").each(function (index) {
            $(this).find(".task-number").text(index + 1);
        });
      }
    
})