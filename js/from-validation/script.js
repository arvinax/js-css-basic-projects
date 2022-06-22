const form = document.querySelector("#form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const passConfirmInput = document.querySelector("#password-confirmation");
const termsInput = document.querySelector("#terms");
const errorsContainer = document.querySelector(".errors");
const errorsList = document.querySelector(".errors-list");

form.addEventListener("submit", (e) => {
  const errorMessages = [];

  clearErrors();

  if (usernameInput.value.length < 6) {
    errorMessages.push("Username must be at least 6 characters");
  }
  if (passwordInput.value.length < 10) {
    errorMessages.push("password must be at least 10 characters");
  }
  if (passwordInput.value !== passConfirmInput.value) {
    errorMessages.push("password must match");
  }
  if (!termsInput.checked) {
    errorMessages.push("please agree with the terms");
  }

  if (errorMessages.length > 0) {
    showErrors(errorMessages);
    e.preventDefault();
  }
  console.log(errorMessages);
});

function clearErrors() {
  while (errorsList.children[0] != null) {
    errorsList.removeChild(errorsList.children[0]);
  }
}

function showErrors(errorMessages) {
  errorMessages.forEach((errorMessage) => {
    const li = document.createElement("li");
    li.innerText = errorMessage;
    errorsList.appendChild(li);
  });
  errorsContainer.classList.add("show");
}
