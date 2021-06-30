const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const currency = document.querySelector("#currency");
const countBtn = document.querySelector(".count");
const clearBtn = document.querySelector(".clear");
const error = document.querySelector(".error");
const info = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");
const tipInfo = document.querySelector(".tip-info");
const tipValue = document.querySelector(".tip-value");

const bill = () => {
  const newPrice = parseFloat(price.value);
  const newPeople = parseInt(people.value);
  const newTip = parseFloat(tip.value);
  const sum = (newPrice + newPrice * newTip) / newPeople;
  const tipSum = newPrice * newTip;
  const currencyType = currency.value;
  info.style.display = "block";
  cost.textContent = `${sum.toFixed(2)} ${currencyType}`;
  tipInfo.style.display = "block";
  tipValue.textContent = `${tipSum.toFixed(2)} ${currencyType}`;
};

const checkPrice = () => {
  if (
    price.value == "" ||
    people.value == "" ||
    tip.value == 0 ||
    currency.value == 0
  ) {
    error.textContent = "Please enter the appropriate value!";
    info.style.display = "none";
    tipInfo.style.display = "none";
  } else {
    error.textContent = "";
    bill();
  }
};

const clearValues = () => {
  price.value = "";
  people.value = "";
  tip.value = 0;
  currency.value = 0;
  info.style.display = "none";
  tipInfo.style.display = "none";
  error.textContent = "";
};

countBtn.addEventListener("click", checkPrice);
clearBtn.addEventListener("click", clearValues);
