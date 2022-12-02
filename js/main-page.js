let add_task = document.querySelector(".new-continue-button");
let body = document.querySelector("body")

function add_task_modal(){
    let div = document.createElement("div")
    div.className ="modal"

    let h2_title = document.createElement("h2");
    h2_title.innerHTML = "Title"
    h2_title.className ="title-h2"

    let input_text = document.createElement("input");
    input_text.type= "text";
    input_text.className="text"

    let h2_date = document.createElement("h2");
    h2_date.innerHTML = "Date"
    h2_date.className="date-h2"

    let input_date = document.createElement("input");
    input_date.type= "text";
    input_date.className="date-text"
    input_date.placeholder = "dd/mm/yyyy"

    let buton_cancel = document.createElement("button")
    let buton_save = document.createElement("button")

    buton_cancel.className="cancel-btn";
    buton_save.className="save-btn";

    buton_cancel.textContent="Cancel";
    buton_save.textContent="Save";

    div.append(input_text)
    div.append(input_date)
    // input_date.setAttribute("data-date-format")
    div.append(h2_title, h2_date)
    div.append(buton_cancel, buton_save)
    
    body.append(div)
    buton_cancel.addEventListener("click",function f(){
        div.style.display ="none"
        div.remove()

    })
    body.style.backgroundColor = "rgb(167, 162, 169)";
    
    /*
    <button type="button" class="new-continue-button">Add New Task</button>
    */
}
add_task.addEventListener("click",add_task_modal)


