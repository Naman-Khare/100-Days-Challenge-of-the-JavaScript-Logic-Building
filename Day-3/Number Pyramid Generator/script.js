let pattern = document.getElementById("pattern");

let iNum = Number(prompt("Enter the number of rows:"));
let iPyramid = "";

if (!Number.isInteger(iNum) || iNum < 1) {
    pattern.textContent = "Invalid Input";
} else {
    for (let i = 1; i <= iNum; i++) {
        for (let j = 1; j <= i; j++) {
            iPyramid += `${j} `;
        }
        iPyramid += "\n";
    }
    pattern.textContent = iPyramid;
}