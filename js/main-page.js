let add_task = document.querySelector(".new-continue-button");
let body = document.querySelector("body")
let modal = document.querySelector("div.modal")
let cancel_btn = document.querySelector(".cancel-btn")
let date_text_input = document.querySelector(".date-text")
let input_text = document.querySelector(".text")
let save_btn = document.querySelector(".save-btn")
let todo_title = document.querySelector(".todo")

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
    let h2_date = document.createElement("h2")
    h2_date.innerHTML = date_text_input.value;
    let takvim = document.createElement("img")
    takvim.className ="calendar"
    takvim.src ="../assets/Vector.png"
    takvim
    let h2_head = takvim

    let todo = input_text.value;
    let li_todo = document.createElement("li")
    li_todo.innerHTML = todo
    h2_head.append(li_todo)
    todo_title.append(h2_head)
}

save_btn.addEventListener("click", add_task_ui)
add_task.addEventListener("click", add_task_modal)
cancel_btn.addEventListener("click", function () {
    modal.style.display = "none";
})