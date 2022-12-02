let continue_button =document.querySelector(".continue-button");
let textbox = document.querySelector(".username-textbox");
continue_button.addEventListener("click", function(){
    if(textbox.value.trim()){
        
        document.location.href = '../main-page.html'
    }
    else{
        continue_button.textContent = "Invalid value!"
        setTimeout(function(){
            continue_button.textContent = "Continue"
        },1000);
        textbox.value="";
        
        
    }
})
