let pattern = document.getElementById("pattern");

let iRows = Number(prompt("Enter the number of rows: "));
let iPattern = "";

if (!Number.isInteger(iRows) || iRows < 1) {
    pattern.textContent = "Invalid Input";
} else {
    for (let i = 1; i <= iRows; i++) {
        for (let j = 1; j <= i; j++) {
            iPattern += "* ";
        }
        iPattern += "\n";
    }
    pattern.textContent = iPattern;
}