let error = document.querySelector(".error");
let not_found = document.querySelector(".not-found");
let list = document.querySelector(".list_container");
let success = document.querySelector(".success");
let employees = [];

document.addEventListener("DOMContentLoaded", () => {
    error.style.display = "none";
    success.style.display = "none";
    not_found.style.display = "none";
});

function addUser() {
    document.querySelector(".btn").addEventListener("click", () => {
        let nam = document.querySelector(".name");
        let profession = document.querySelector(".profession");
        let age = document.querySelector(".age");

        if (nam.value !== "" && profession.value !== "" && age.value !== "") {
            const employee = {
                name: nam.value,
                profession: profession.value,
                age: age.value
            };
            employees.push(employee);
            renderEmployees();

            nam.value = "";
            profession.value = "";
            age.value = "";

            error.style.display = "none";
            success.style.display = "block";
            not_found.style.display = "none";
        } else {
            error.style.display = "block";
            success.style.display = "none";
        }
    });
}

function handleDelete(event) {
    let element = event.target.parentElement;
    let index = Array.from(element.parentElement.children).indexOf(element);
    employees.splice(index, 1);
    element.remove();
    renderEmployees();

    if (employees.length === 0) {
        not_found.style.display = "block";
    }
}

function renderEmployees() {
    list.innerHTML = "";

    employees.forEach((employee) => {
        list.innerHTML += `
            <div class="list_box">
                <div class="paraContainer">
                    <p>${employee.name}</p>
                    <p>${employee.profession}</p>
                    <p>${employee.age}</p>
                </div>
                <button onclick="handleDelete(event)">Delete</button>
            </div>`;
    });
}

addUser();
