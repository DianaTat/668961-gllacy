var link = document.querySelector(".feedback");
var popup = document.querySelector(".feedback-popup");
var close = document.querySelector(".popup-close-button");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=feedback-email]");
var text = popup.querySelector("[name=feedback-text]");
var login = document.querySelector(".login-popup");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  username.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value) {
    evt.preventDefault();
    console.log("Напишите что-нибудь");
  }
})

login.addEventListener("submit", function (evt) {
  if (!usermail.value || !userpassword.value) {
    evt.preventDefault();
    console.log("Введите электронный адрес и пароль");
  }
})
