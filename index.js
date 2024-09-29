let error = document.querySelector(".error");
let not_found = document.querySelector(".not-found");
let list = document.querySelector(".list_container");
let success = document.querySelector(".success")
document.addEventListener("DOMContentLoaded", () => {
    error.style.display = "none";
    success.style.display = "none"
})

function addUser() {
    document.querySelector(".btn").addEventListener("click", () => {
        let nam = document.querySelector(".name");
        let profession = document.querySelector(".profession");
        let age = document.querySelector(".age");

        if (nam.value !== "" && profession.value !== "" && age.value !== "") {
            list.innerHTML += `
                <div class="list_box">
<div class="paraContainer">
    <p>${nam.value}</p>
    <p>${profession.value}</p>
    <p>${age.value}</p>
</div>

<button onclick="handleDelete(event)">Delete</button>
</div>`
           nam.value = ""
           profession.value = ""
           age.value = ""

   
             error.style.display = "none";
            success.style.display = "block"
            not_found.style.display = "none"

        } else {
            error.style.display = "block";
            success.style.display = "none"
        }
    });
}

function handleDelete(event) {

    let element = event.target.parentElement
    if(event.target.parentElement.parentElement.children.length === 1){
       element.remove()
        not_found.style.display = ""
       
    }
    else{element.remove()}
     
 }

addUser();