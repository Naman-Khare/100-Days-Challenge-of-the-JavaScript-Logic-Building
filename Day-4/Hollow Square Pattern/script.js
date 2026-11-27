let pattern = document.getElementById("pattern");

let iNum = Number(prompt("Enter the number of rows:"));
let count = "";

if (!Number.isInteger(iNum) || iNum < 2) {
    pattern.textContent = "Invalid Input";
} else {
    for (let i = 1; i <= iNum; i++) {
        for (let j = 1; j <= iNum; j++) {
            if (i === 1 ||i === iNum ||j === 1||j === iNum){
                count += "* ";
            } else {
                count += "  ";
            }
        }
        count += "\n";
    }
    pattern.textContent = count;
}
