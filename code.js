let input = document.querySelector("input");
let showHide = document.querySelector(".show_hide");
let indiactor = document.querySelector(".indicator");
let iconText = document.querySelector(".icon-text");
let text = document.querySelector(".text");

showHide.addEventListener("click", ()=>{
    if(input.type==="password"){
        input.type = "text";
        showHide.classList.replace("fa-eye-slash","fa-eye");
    }else{
        input.type = "password";
        showHide.classList.replace("fa-eye","fa-eye-slash");
    }
})

let alphabet = /[a-zA-Z]/;
    numbers = /[0-9]/,
    scharacters = /[!,@,#,$,%,^,&,*,(,),?,_,-,=,+,~]/;

input.addEventListener("keyup",()=>{
    indiactor.classList.add("active");
    let val = input.value;
    if(val.match(alphabet) || val.match(numbers) || 
    val.match(scharacters)){
        text.textContent = "Password is Weak";
        input.style.borderColor = "#d50000";
        showHide.style.color ="#d50000";
        iconText.style.color ="#d50000";
    }
    if(val.match(alphabet) && val.match(numbers) && 
    val.length>=6){
        text.textContent = "Password is Medium";
        input.style.borderColor = "#ffab00";
        showHide.style.color ="#ffab00";
        iconText.style.color ="#ffab00";
    }
    if(val.match(alphabet) && val.match(numbers) && val
    .match(scharacters) && val.length>=8){
        text.textContent = "Password is Strong";
        input.style.borderColor = "#00e676";
        showHide.style.color ="#00e676";
        iconText.style.color ="#00e676";
    }
    if(val== ""){
        indiactor.classList.remove("active");
        input.style.borderColor = "#A6A6A6";
        showHide.style.color ="#A6A6A6";
        iconText.style.color ="#A6A6A6";
    }
})