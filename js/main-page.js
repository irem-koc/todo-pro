let add_task = document.querySelector(".new-continue-button");
let body = document.querySelector("body")
let modal = document.querySelector("div.modal")
let cancel_btn = document.querySelector(".cancel-btn")
let date_text_iput = document.querySelector(".date-text")
function add_task_modal(event) {
    modal.style.display="block"
}
add_task.addEventListener("click", add_task_modal)
function off() {
    modal.style.display = "none";
  }
cancel_btn.addEventListener("click",function(){
    modal.style.display = "none";
})
date_text_iput.addEventListener("click", function(){
    
})