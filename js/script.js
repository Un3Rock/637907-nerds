var write = document.querySelector(".write-to-us");

var popup = document.querySelector(".popup");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var nick = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("nick");
} catch (err) {
  isStorageSupport = false;
}

write.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");

  if (storage) {
    nick.value = storage;
    mail.focus();
  } else {
    nick.focus();
  }
  console.log("focus");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
  if (!nick.value || !mail.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
    console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("nick", nick.value);
    }
}
});
window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
evt.preventDefault();
if (popup.classList.contains("popup-show")) {
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
}
}
});
