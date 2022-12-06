let add_task = document.querySelector(".new-continue-button");
let body = document.querySelector("body")
let modal = document.querySelector("div.modal")
let cancel_btn = document.querySelector(".cancel-btn")
let date_text_input = document.querySelector(".date-text")
let input_text = document.querySelector(".text")
function add_task_modal(event) {
    modal.style.display = "block";
    date_text_input.value = "";
    input_text.value = ""
}
add_task.addEventListener("click", add_task_modal)
function off() {
    modal.style.display = "none";

}
cancel_btn.addEventListener("click", function () {
    modal.style.display = "none";
})

function validate_date_value() {
    console.log(date_text_input.value)
    if (date_text_input.value.length == 2) {
        console.log(date_text_input.value)
        date_text_input.value += "/";
    } else if (date_text_input.value.length == 5) {
        date_text_input.value += "/";
    }
}
