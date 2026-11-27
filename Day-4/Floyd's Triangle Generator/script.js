let pattern = document.getElementById("pattern");

let num = Number(prompt("Enter number of rows:"));
let output = "";
let count = 1;

if (!Number.isInteger(num) || num <= 0) {
    pattern.textContent = "Invalid Input";
} else {
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            output += count + " ";
            count++;
        }
        output += "\n";
    }
    pattern.textContent = output;
}
