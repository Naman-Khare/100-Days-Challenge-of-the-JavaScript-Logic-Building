let messageInput = document.getElementById("messageInput");
let sCount = document.getElementById("count");
let remaining = document.getElementById("remaining");
let progress = document.getElementById("progress");
let progressBar = document.getElementById("progressBar");
let status = document.getElementById("status");

messageInput.addEventListener("input" , ()=>{
    let count = messageInput.value;
    updateCounter(count);
    updateRemaining(count);
    updateProgress(count);
    updateStatus(count);
});

function updateCounter(a){
    let cValue = a.length;
    sCount.textContent = `${cValue} / 100`
}	

function updateRemaining(b){
    let i = b.length;
    let iC = 100-i;
    remaining.textContent = `${iC} remaining`;
}	

function updateProgress(b){
    let i = b.length;
    progressBar.style.width = i + "%";
}	

function updateStatus(b) {
    let i = b.length;
    if (i === 100) {
        status.textContent = "Character limit reached!";
    } else {
        status.textContent = "You can continue typing.";
    }
}