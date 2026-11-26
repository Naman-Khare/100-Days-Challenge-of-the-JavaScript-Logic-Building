let pattern = document.getElementById("pattern");

let iNum = Number(prompt("Enter the number of rows: "));
let iPattern = "";

if (!Number.isInteger(iNum) || iNum < 1) {
    pattern.textContent = "Invalid Input";
} else {
    for (let i = iNum; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            iPattern += "* ";
        }
        iPattern += "\n";
    }
    pattern.textContent = iPattern;
}