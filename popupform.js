const modalPopup = document.querySelector(".modal-container");
const buttonSearch = document.querySelector(".button-search");
const popupForm = modalPopup.querySelector(".modal-popup");
const buttonFind = popupForm.querySelector(".button-find");
const inputArrival = popupForm.querySelector(".input-arrival");
const inputDeparture = popupForm.querySelector(".input-departure");
const buttonMinusAdults = popupForm.querySelector(
  "#input-adults-container .btn-minus"
);
const buttonPlusAdults = popupForm.querySelector(
  "#input-adults-container .btn-plus"
);
const inputAdults = popupForm.querySelector("#amount-adults");
const buttonMinusChildren = popupForm.querySelector(
  "#input-children-container .btn-minus"
);
const buttonPlusChildren = popupForm.querySelector(
  "#input-children-container .btn-plus"
);
const inputChildren = popupForm.querySelector("#amount-children");

buttonSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.toggle("modal-show");
});

popupForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

buttonFind.addEventListener("click", function (evt) {
  if (!inputArrival.value || !inputDeparture.value) {
    buttonFind.classList.add("modal-error");
    setTimeout(function () {
      buttonFind.classList.remove("modal-error");
    }, 500);
  } else {
    localStorage.setItem("arrival", inputArrival.value);
    localStorage.setItem("departure", inputDeparture.value);
    localStorage.setItem("adults", inputAdults.value);
    localStorage.setItem("children", inputChildren.value);
  }
});

buttonMinusAdults.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (inputAdults.value > 1) {
    inputAdults.value = Number(inputAdults.value) - 1;
  }
});

buttonPlusAdults.addEventListener("click", function (evt) {
  evt.preventDefault();
  inputAdults.value = Number(inputAdults.value) + 1;
});

buttonMinusChildren.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (inputChildren.value > 0) {
    inputChildren.value = Number(inputChildren.value) - 1;
  }
});

buttonPlusChildren.addEventListener("click", function (evt) {
  evt.preventDefault();
  inputChildren.value = Number(inputChildren.value) + 1;
});
