$(document).ready(function(){
    let editIndex = -1;//this index will be -1 if we are not editing and if we are, it will take the value of the index of the edited list element
    $("#submit-btn").click(function(textval){
        textval = $("#task").val();//takes the value of the text field
        if(textval.trim() != ""){//checks if the input field is not empty
            if(editIndex === -1){//the case that will work if we are creating a new task
                $("#tasks").append(`<li class = "task border-bottom bg-transparent"> <span class="task-number"></span> <p class="fs-2">`+ textval +` </p><i class="bx bxs-edit bx-md"></i> <i class="bx bxs-trash bx-md"></i><i class="bx bx-check bx-md"></i></li>`);//adding a new li element

            }
            else{//the case that will work if we are editing
                $("#tasks li").eq(editIndex).find("p").text(textval);// first we find all li elements, then we find the one with the index equal to the one we have, then we find the p element withing the li and change its value 
                setDefault();//setting default values
                editIndex = -1;//returning the edit index back to its default value
            }
            $("#task").val("");//emptying the input field
        }
        
    })
    $("#tasks").on("click", ".bxs-trash" , function(){//removing a task
        $(this).parent().remove();
        updateTaskNumbers();
    })
    $("#tasks").on("click",".bx-check", function(){//checking a task that is completed
        $(this).parent().find("p").toggleClass("checked");//this will remove or add the class "checked" depending if it's already added or not
        $(this).parent().find(".bxs-edit").toggle();//hiding and revealing the edit button
    })
    function setDefault(){// the default function that returns the page back to default after a cancellation or edit
        $("#task").val("");
        $("#submit-btn").text("Submit");
        $("#submit-btn").removeClass("edit")
        $(".cancel-btn").addClass("d-none");//hiding the cancel button
        $(".bx").show();//showing back the button for delete, check and edit
        $("#tasks li").eq(editIndex).removeClass("edit-color")
        editIndex = -1;//returning the edit index back to its default value
        $("#tasks").sortable("enable");//enabling back the option to drag and drop
    }
    $("#tasks").on("click" , ".bxs-edit", function(){
        editIndex = $(this).parent().index();//getting the index of the edit button
        $(this).parent().addClass("edit-color")//chaning the color of the text so the user knows which field they are editing
        $("#task").val($(this).prev("p").html());//chaning the value of the input field as the task value
        $("#submit-btn").text("Edit");//changing the submit button into an edit button
        $("#submit-btn").addClass("edit")
        $(".cancel-btn").removeClass("d-none");// showing the cancel button
        $(".bx").hide();//hiding the other boxes so the user can only edit the task before doing anything else
        $("#tasks").sortable("disable");//disabling the sorting until the user finishes editing
    })
    $(".cancel-btn").on("click", function(){//cancelling the editing
        setDefault();

    })
    $("#tasks").sortable({//Drag and drop function
        update: function () {
            updateTaskNumbers();
        }
      });
    
      
      function updateTaskNumbers() {//function to update numeric order
        $("#tasks li").each(function (index) {
            $(this).find(".task-number").text(index + 1);//adding 1 to the value since the idnex starts with 0
        });
      }
    
})