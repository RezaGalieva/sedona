const buttonSearch = document.querySelector(".button-search");
const buttonFind = document.querySelector(".button-find");
const modalPopup = document.querySelector(".modal-container");
const popupForm = document.querySelector(".modal-popup");
const inputArrival = document.querySelector(".input-arrival");
const inputDeparture = document.querySelector(".input-departure");
const buttonMinus = document.querySelector(".btn-minus");
const buttonPlus = document.querySelector(".btn-plus");
const adults = document.querySelector("#amount-adults");
const buttonMinusChildren = document.querySelector(".btn-minus-ch");
const buttonPlusChildren = document.querySelector(".btn-plus-ch");
const children = document.querySelector("#amount-children");

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
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
  }
});

buttonMinus.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (adults.value > 1) {
    adults.value = Number(adults.value) - 1;
  }
});

buttonPlus.addEventListener("click", function (evt) {
  evt.preventDefault();
  adults.value = Number(adults.value) + 1;
});

buttonMinusChildren.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (children.value > 0) {
    children.value = Number(children.value) - 1;
  }
});

buttonPlusChildren.addEventListener("click", function (evt) {
  evt.preventDefault();
  children.value = Number(children.value) + 1;
});
