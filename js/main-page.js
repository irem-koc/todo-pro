let add_task = document.querySelector(".new-continue-button");
let body = document.querySelector("body")
let b = document.querySelector(".b")
function add_task_modal() {
    let modal = document.createElement("div")
    modal.className = "modal"
    let modal_content = document.createElement("div")
    modal_content.className = "modal_content"
    let h2_title = document.createElement("h2");
    h2_title.innerHTML = "Title"
    h2_title.className = "title-h2"

    let input_text = document.createElement("input");
    input_text.type = "text";
    input_text.className = "text"

    let h2_date = document.createElement("h2");
    h2_date.innerHTML = "Date"
    h2_date.className = "date-h2"

    let input_date = document.createElement("input");
    input_date.type = "text";
    input_date.className = "date-text"
    input_date.placeholder = "dd/mm/yyyy"

    let buton_cancel = document.createElement("button")
    let buton_save = document.createElement("button")

    buton_cancel.className = "cancel-btn";
    buton_save.className = "save-btn";

    buton_cancel.textContent = "Cancel";
    buton_save.textContent = "Save";

    modal_content.append(input_text)
    modal_content.append(input_date)
    // input_date.setAttribute("data-date-format")
    modal_content.append(h2_title, h2_date)
    modal_content.append(buton_cancel, buton_save)

    modal.append(modal_content)
    body.append(modal)
    modal.style.display = "block";
    buton_cancel.addEventListener("click", function f() {
        modal.style.display = "none"
        modal.remove()
        // body.style.opacity=1
    })
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
      }
    console.log("body");
    /*
    background-color: rgba(0,0,0,0.5); /* Black background with opacity 
    z-index: 2;
    */
    // body.style.opacity = 0.5;
    console.log(modal)
    // div.style.opacity =1
    /*
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    */ 

    
}
add_task.addEventListener("click", add_task_modal)


