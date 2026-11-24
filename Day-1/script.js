let num = document.getElementById("number");
let factorial = document.getElementById("factorial");

let iNum = Number(prompt("Enter the Number:"));

if (!Number.isInteger(iNum) || iNum < 0) {
    num.textContent = "Invalid Number";
    factorial.textContent = "Please enter a non-negative whole number";

} else {
    let total = 1;
    for (let i = 1; i <= iNum; i++) {
        total *= i;
    }
    num.textContent = iNum;
    factorial.textContent = total;
}