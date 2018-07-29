var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';

// NEW PROJECT MODAL START
var new_project_btn = $("#new_project_btn");

$("#newProjectModal").click(function() {
    $(this).css("display", "block");
});

$(".new_project_close").click(function() {
    $(this).css("display", "none");
});
// NEW PROJECT MODAL END

// DELETE JOB START
$(document).ready(function() {
        $(".delete-btn").click(function() {
            var jobId = $(this).attr('id');
            
             $.ajax({
                type: "POST",
                url: "timeManagementPHP.php",
                data: {
                    "jobId": jobId,
                },
                success: function(data) {
                   location.reload();
                }
            });
        });
    });
// DELETE JOB END
        
// COMPLETED TASK START
// function compTask(id)  {
//     //Changing styling
//     if ($('#complete-' + id).prop('checked')) {
//         //document.getElementById('tr' + id).style.color = "green";
//         $("#tr"+id).css("color", "green");
//     } else {
//         //document.getElementById('tr' + id).style.color = "black";
//         $("#tr"+id).css("color", "black");
//     }
// }
// //COMPLETED TASK END
    
// // PAID TASK START
//         function paidTask(id) {
//             // FUTURE: After selecting both then unselecting complete, paid stays selected.
//             document.getElementById('complete-' + id).disabled = false;
//             document.getElementById('paid-' + id).click(function () {
//                 return false;
//             });
//             if ($('#complete-' + id).prop('checked')) {
//                 document.getElementById('tr' + id).style.color = "green";
//                 document.getElementById('paid-' + id).click(function () {
//                     return true;
//                 });
//             }
//             if ($('#paid-' + id).prop('checked') && $('#complete-' + id).prop('checked')) {
//                 document.getElementById('tr' + id).style.color = "gray";
//             }
//             else {
//                 document.getElementById('tr' + id).style.color = "black";
//             }
//         }
//PAID TASK END

$('.check').attr('disabled', true);

if($('#paid-' + id).prop('checked') == false && $('#complete-' + id).prop('checked') == false) {
    document.getElementById('tr' + id).style.color = "black";
}

function compTask(id) {
    //$('#tr-' + id).css("color", "green");
    document.getElementById('tr' + id).style.color = "green";
    $('#paid-' + id).attr('disabled', false);
}


function paidTask(id) {    
    //$('#tr-' + id).css("color", "gray");
    document.getElementById('tr' + id).style.color = "gray";
    //if($('#paid-' + id).prop('checked') && $('#complete-' + id).) {}
}