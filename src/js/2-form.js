
const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: ""
}
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector(".email-input")
const textarea = form.querySelector(".textarea");

populateForm();

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", onFormValue);


// Reset
function onFormSubmit(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const message = textarea.value.trim();

 if (email === "" || message === "") {
     alert("Fill please all fields");
   } else {
    console.log(formData);
    };

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: "", message: ""}
}


// Getting value

function onFormValue(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
    const saveData = localStorage.getItem(STORAGE_KEY);

    if (saveData) {
        formData = JSON.parse(saveData);
        emailInput.value = formData.email || "";
        textarea.value = formData.message || "";
    }

}

