var selectedRow = null

var formInput = $(".form-input");
var firstName = $(".first-name");
var lastName = $(".last-name");
var email = $(".email");
var gender = $("#gender");
// vat tBody = $("tbody")


formInput.on("submit", submitForm)

function submitForm(e){
    e.preventDefault();
    addForm();
    firstName.val("");
    lastName.val("");
    email.val("");
}

function addForm(){
    formList = `
    <tr>
        <td class="name">${firstName.val()}</td>
        <td class="name">${lastName.val()}</td>
        <td class="email">${email.val()}</td>
        <td>${gender.val()}</td>
        <td><a href="£" class="checked curr">Edit</a></td>
        <td><button class="edit-btn" onClick="onEdit(this)">Edit</button></td>
        <td><button class="delete-btn" onClick="onDelete(this)">Delete</button></td>
    </tr>
    `
    $("tbody").append(formList)
}


function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    firstName.val(selectedRow.cells[0].innerHTML)
    lastName.val(selectedRow.cells[1].innerHTML)
    email.val(selectedRow.cells[2].innerHTML);
    td.stopPropagation

    $(".submit-button").addClass('hide');
    $(".submit-button-2").removeClass('hide')
}


$(".submit-button-2").on("click", updateForm)

function updateForm(){

selectedRow.cells[0].innerHTML = $(".first-name").val()
selectedRow.cells[1].innerHTML = $(".last-name").val()
selectedRow.cells[2].innerHTML = $(".email").val();
selectedRow.cells[3].innerHTML = $("#gender").val();

    
firstName.val("");
lastName.val("");
email.val("");

    $(".submit-button").removeClass('hide');
    $(".submit-button-2").addClass('hide')
}

function onDelete(td){
    selectedRow = td.parentElement.parentElement;
    selectedRow.remove();
}









