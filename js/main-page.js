let add_task = document.querySelector(".new-continue-button");
let body = document.querySelector("body")
let modal = document.querySelector("div.modal")
let cancel_btn = document.querySelector(".cancel-btn")
let date_text_input = document.querySelector(".date-text")
let input_text = document.querySelector(".text")
let save_btn = document.querySelector(".save-btn")
let todos = document.querySelector(".todos")

window.onclick = function (event) {
    if (event.target == modal) {
        console.log("clicked")
        modal.style.display = "none";
    }
}

function add_task_modal(event) {
    modal.style.display = "block";
    date_text_input.value = "";
    input_text.value = ""
}
function off() {
    modal.style.display = "none";
}
function validate_date_value() {
    console.log(date_text_input.value)
    if (date_text_input.value.length == 2) {
        console.log(date_text_input.value)
        date_text_input.value += "/";
    } else if (date_text_input.value.length == 5) {
        date_text_input.value += "/";
    }
}
function add_task_ui(){
    modal.style.display = "none"
    let span = document.createElement("span")
    span.className="todo_list_head"
    span.innerHTML= `
    <img class="image" src='../assets/calendar.png' />
    <h2 class="header1" style='display:inline;'>${date_text_input.value}</h2>
    `
    todos.append(span)
    let todo_task = document.createElement("li")
    todo_task.className ="todo_task"
    todo_task.style.listStyle ="none"
    todo_task.innerHTML= ` 
    <p style="background:none" click="putImage()" class="first_image"> </p>
    <p style="background:none" class="todo-text">${input_text.value}</p>
    <img style="background:none" class="second_image" src='../assets/pencil.png' />
    <img style="background:none" class="third_image" src='../assets/delete.png' />
    `
    body.append(todo_task)
}

save_btn.addEventListener("click", add_task_ui)
add_task.addEventListener("click", add_task_modal)
cancel_btn.addEventListener("click", function () {
    modal.style.display = "none";
})
let check_image = document.querySelector(".first_image")
function putImage(){
    let image = document.createElement("img")
    image.src='../assets/done.png';
    check_image = image
}