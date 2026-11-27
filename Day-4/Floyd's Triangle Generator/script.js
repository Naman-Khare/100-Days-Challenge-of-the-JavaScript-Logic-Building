let pattern = document.getElementById("pattern");

let iNum = Number(prompt("Enter the no of rows : "));
let iPattern = "";

for(let i = 1 ; i <= iNum ; i++){
    for(let j = 1 ; j <= i ; j++){
        iPattern += `${i} `;
    }
    iPattern += "\n"
}

pattern.textContent = iPattern;