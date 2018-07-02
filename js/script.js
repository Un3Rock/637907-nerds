var write = document.querySelector(".write-to-us");

var popup = document.querySelector(".popup");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var nick = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=email]");

var sliderControl1 = document.querySelector('.slider-controls i:first-child');
var sliderControl2 = document.querySelector('.slider-controls i:nth-child(2)');
var sliderControl3 = document.querySelector('.slider-controls i:last-child');

var sliders = document.querySelectorAll('.features');

var isStorageSupport = true;
var storage = "";

function clearSelection() {
	var ctrl = document.querySelectorAll('.slider-controls i');
	for (var i=0; i<ctrl.length; i++) {
			ctrl[i].classList.remove("active-element");
			sliders[i].classList.remove("active-slide");
		}
}

function setActiveSlide(index) {
	clearSelection();
	if (index==1) {
		sliderControl1.classList.add("active-element");
		sliders[0].classList.add("active-slide");
	}
	if (index==2) {
		sliderControl2.classList.add("active-element");
		sliders[1].classList.add("active-slide");
	}
	if (index==3) {
		sliderControl3.classList.add("active-element");
		sliders[2].classList.add("active-slide");
	}

}

	sliderControl1.addEventListener("click", function (evt) {
		setActiveSlide(1);
		});

	sliderControl2.addEventListener("click", function (evt) {
		setActiveSlide(2);
		});

	sliderControl3.addEventListener("click", function (evt) {
		setActiveSlide(3);
		});

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
