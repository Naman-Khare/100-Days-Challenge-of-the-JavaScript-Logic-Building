let onePrice = document.getElementById("price1");
let twoPrice = document.getElementById("price2");
let threePrice = document.getElementById("price3");

let totalQuantity = document.getElementById("totalQuantity");
let totalAmount = document.getElementById("totalAmount");

let price1 = Number(prompt("Enter the keyboard price :"));
let quantity1 = Number(prompt("Enter the keyboard quantity :"));
let price2 = Number(prompt("Enter the mouse price :"));
let quantity2 = Number(prompt("Enter the mouse quantity :"));
let price3 = Number(prompt("Enter the headphone price :"));
let quantity3 = Number(prompt("Enter the headphone quantity :"));

const first = Number(onePrice.textContent = price1*quantity1);
const second = Number(twoPrice.textContent = price2*quantity2);
const three = Number(threePrice.textContent = price3*quantity3);

totalQuantity.textContent = quantity1+quantity2+quantity3;
totalAmount.textContent = first+second+three