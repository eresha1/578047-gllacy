var link = document.querySelector(".button-feedback");

var popup = document.querySelector(".modal-feedback");

var overlay = document.querySelector(".modal-overlay");

var close = popup.querySelector(".modal-close");

var feedback_name = popup.querySelector("#feedback-name");

var feedback_email = popup.querySelector("#feedback-email");

var feedback_write = popup.querySelector("#feedback-write");

var form = popup.querySelector("form");


link.addEventListener("click", function (evt) {

  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  feedback_name.focus();
});


close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
  popup.classList.remove("modal-error");
});


form.addEventListener("submit", function (evt) {
  if (!feedback_name.value || !feedback_email.value || !feedback_write.value) {

    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;

    popup.classList.add("modal-error");

  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
      popup.classList.remove("modal-error");
    }
  }
});
