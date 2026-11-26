let marks = document.getElementById("marks");
let status = document.getElementById("resultStatus");
let grade = document.getElementById("grade");

let inpMarks = Number(prompt("Enter your marks :"));
let obtMarks = Number(marks.textContent = inpMarks);

if (obtMarks > 100) {
    status.textContent = "Invalid Marks";
    grade.textContent = "Invakid Marks";
} else if (obtMarks < 0) {
    status.textContent = "Invalid Marks";
    grade.textContent = "Invalid Marks";
} else if (obtMarks >= 90 && obtMarks <= 100) {
    status.textContent = "Pass";
    grade.textContent = "A";
} else if (obtMarks <= 89 && obtMarks >= 80) {
    status.textContent = "Pass";
    grade.textContent = "B"
} else if (obtMarks <= 79 && obtMarks >= 70) {
    status.textContent = "Pass";
    grade.textContent = "C"
} else if (obtMarks <= 69 && obtMarks >= 60) {
    status.textContent = "Pass";
    grade.textContent = "D"
} else if (obtMarks <= 59 && obtMarks >= 33) {
    status.textContent = "Pass";
    grade.textContent = "E"
} else {
    status.textContent = "Fail";
    grade.textContent = "Fail"
}